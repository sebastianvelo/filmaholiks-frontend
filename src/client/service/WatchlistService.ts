import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { ListProps } from "client/views/pages/watchlist/lists/list/List";

class WatchlistService {

    public static ITEM_KEY = "item";

    public static ITEM_IDX_KEY = "item_idx";

    public static LIST_KEY = "list";

    public static LIST_IDX_KEY = "list_idx";

    public static item = {
        retrieveIdx: (query: string, lists: ListProps[]): { itemIdx: number, listIdx: number } | undefined => {
            const listIdx = lists.findIndex(list => list.items.some(item => item.title === query));
            if (listIdx === -1) return undefined;
            const itemIdx = lists[listIdx].items.findIndex(item => item.title === query);
            return {
                itemIdx,
                listIdx,
            };
        },
        find: (query: string, lists: ListProps[]): ItemProps | undefined => {
            const idxs = WatchlistService.item.retrieveIdx(query, lists);
            if (!idxs) return undefined;
            return lists[idxs.listIdx].items[idxs.itemIdx];
        },
        exists: (query: string, lists: ListProps[]): boolean => WatchlistService.item.retrieveIdx(query, lists) !== undefined,
        save: (listIdx: number, item: ItemProps, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items.push(item);
            updateLists([...lists]);
        },
        delete: (listIdx: number, itemIdx: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items = lists[listIdx].items.filter((_, idx) => idx !== itemIdx);
            updateLists([...lists]);
        },
        deleteByName: (query: string, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const item = WatchlistService.item.retrieveIdx(query, lists);
            if (!item) return;
            WatchlistService.item.delete(item.listIdx, item.itemIdx, lists, updateLists);
        },
        swap: (listIdx: number, idxA: number, idxB: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const itemA = lists[listIdx].items[idxA];
            const itemB = lists[listIdx].items[idxB];
            lists[listIdx].items[idxB] = itemA;
            lists[listIdx].items[idxA] = itemB;
            updateLists([...lists]);
        },
    };

    public static list = {
        dummy: (lists: ListProps[]) => ({
            title: `List ${lists.length + 1}`,
            items: []
        }) as unknown as ListProps,
        find: (query: string, lists: ListProps[]): ListProps | undefined => {
            const idxs = WatchlistService.item.retrieveIdx(query, lists);
            if (!idxs) return undefined;
            return lists[idxs.listIdx];
        },
        add: (lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            updateLists([...lists, WatchlistService.list.dummy(lists)]);
        },
        delete: (listIdx: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            updateLists([...lists.filter((_, idx) => idx !== listIdx)]);
        },
        swap: (idxA: number, idxB: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const listA = lists[idxA];
            const listB = lists[idxB];
            lists[idxB] = listA;
            lists[idxA] = listB;
            updateLists([...lists]);
        },
    }

    public static fromEvent = {
        item: {
            retrieve: (event: React.DragEvent<HTMLElement>): ItemProps | undefined =>
                event.dataTransfer.getData(WatchlistService.ITEM_KEY) && JSON.parse(event.dataTransfer.getData(WatchlistService.ITEM_KEY)),
            retrieveIdx: (event: React.DragEvent<HTMLElement>): number =>
                Number(event.dataTransfer.getData(WatchlistService.ITEM_IDX_KEY)),
            save: (event: React.DragEvent<HTMLElement>, item: ItemProps, idx: number, listIdx?: number): void => {
                event.dataTransfer.setData(WatchlistService.ITEM_KEY, JSON.stringify(item));
                event.dataTransfer.setData(WatchlistService.ITEM_IDX_KEY, String(idx));
                event.dataTransfer.setData(WatchlistService.LIST_IDX_KEY, String(listIdx));
            },
            handleSave: (event: React.DragEvent<HTMLElement>, addItem: (item: ItemProps) => void) => {
                const item = WatchlistService.fromEvent.item.retrieve(event);
                if (item) addItem(item);
            },
            handleMove: (event: React.DragEvent<HTMLElement>, targetListIdx: number, moveItem: (item: ItemProps, sourceListIdx: number, sourceItemIdx: number) => void) => {
                const item = WatchlistService.fromEvent.item.retrieve(event);
                const itemIdx = WatchlistService.fromEvent.item.retrieveIdx(event);
                const sourceListIdx = WatchlistService.fromEvent.list.retrieveIdx(event);
                if (item && targetListIdx !== sourceListIdx) moveItem(item, sourceListIdx, itemIdx);
            },
            handleSwap: (event: React.DragEvent<HTMLElement>, swapItem: (targetItemIdx: number) => void) => {
                const targetItemIdx = WatchlistService.fromEvent.item.retrieveIdx(event);
                swapItem(targetItemIdx);
            },
        },
        list: {
            retrieve: (event: React.DragEvent<HTMLElement>): number | boolean =>
                event.dataTransfer.getData(WatchlistService.LIST_KEY) !== "" && +event.dataTransfer.getData(WatchlistService.LIST_KEY),
            retrieveIdx: (event: React.DragEvent<HTMLElement>): number =>
                Number(event.dataTransfer.getData(WatchlistService.LIST_IDX_KEY)),
            save: (event: React.DragEvent<HTMLElement>, idx: number): void => {
                if (!WatchlistService.fromEvent.item.retrieve(event))
                    event.dataTransfer.setData(WatchlistService.LIST_KEY, String(idx))
            },
            swap: (event: React.DragEvent<HTMLElement>, swap: (target: number) => void) => {
                const list = WatchlistService.fromEvent.list.retrieve(event);
                if (typeof list === 'number') swap(list);
            }
        },
    };

    public static fromLocalStorage = {
        list: {
            retrieve: (): ListProps[] =>
                JSON.parse(localStorage.getItem(WatchlistService.LIST_KEY) || "[]"),
            save: (lists: ListProps[]) =>
                localStorage.setItem(WatchlistService.LIST_KEY, JSON.stringify(lists)),
            find: (query?: string): ListProps | undefined =>
                WatchlistService.list.find(query || "", WatchlistService.fromLocalStorage.list.retrieve()),
        },
        item: {
            retrieveIdx: (query?: string): { itemIdx: number, listIdx: number } | undefined =>
                WatchlistService.item.retrieveIdx(query || "", WatchlistService.fromLocalStorage.list.retrieve()),
            find: (query?: string): ItemProps | undefined =>
                WatchlistService.item.find(query || "", WatchlistService.fromLocalStorage.list.retrieve()),
            save: (listIdx: number, item: ItemProps) =>
                WatchlistService.item.save(
                    listIdx, item, WatchlistService.fromLocalStorage.list.retrieve(), WatchlistService.fromLocalStorage.list.save
                ),
            delete: (listIdx: number, itemIdx: number) =>
                WatchlistService.item.delete(
                    listIdx, itemIdx, WatchlistService.fromLocalStorage.list.retrieve(), WatchlistService.fromLocalStorage.list.save,
                ),
            deleteByName: (query?: string) => {
                const item = WatchlistService.fromLocalStorage.item.retrieveIdx(query);
                if (!item) return;
                WatchlistService.fromLocalStorage.item.delete(item.listIdx, item.itemIdx);
            },
            exists: (query?: string) => WatchlistService.fromLocalStorage.item.retrieveIdx(query) !== undefined

        }

    }

}

export default WatchlistService;