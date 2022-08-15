import { CardHorizontalProps } from "client/common/components/card-horizontal/CardHorizontal";
import { ListProps } from "client/views/components/watch-list/list/List";

class WatchlistHelper {

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
        find: (query: string, lists: ListProps[]): CardHorizontalProps | undefined => {
            const idxs = WatchlistHelper.item.retrieveIdx(query, lists);
            if (!idxs) return undefined;
            return lists[idxs.listIdx].items[idxs.itemIdx];
        },
        exists: (query: string, lists: ListProps[]): boolean => WatchlistHelper.item.retrieveIdx(query, lists) !== undefined,
        save: (listIdx: number, item: CardHorizontalProps, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items.push(item);
            updateLists([...lists]);
        },
        delete: (listIdx: number, itemIdx: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items = lists[listIdx].items.filter((_, idx) => idx !== itemIdx);
            updateLists([...lists]);
        },
        deleteByName: (query: string, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const item = WatchlistHelper.item.retrieveIdx(query, lists);
            if (!item) return;
            WatchlistHelper.item.delete(item.listIdx, item.itemIdx, lists, updateLists);
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
            const idxs = WatchlistHelper.item.retrieveIdx(query, lists);
            if (!idxs) return undefined;
            return lists[idxs.listIdx];
        },
        add: (lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            updateLists([...lists, WatchlistHelper.list.dummy(lists)]);
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
            retrieve: (event: React.DragEvent<HTMLElement>): CardHorizontalProps | undefined =>
                event.dataTransfer.getData(WatchlistHelper.ITEM_KEY) && JSON.parse(event.dataTransfer.getData(WatchlistHelper.ITEM_KEY)),
            retrieveIdx: (event: React.DragEvent<HTMLElement>): number =>
                Number(event.dataTransfer.getData(WatchlistHelper.ITEM_IDX_KEY)),
            save: (event: React.DragEvent<HTMLElement>, item: CardHorizontalProps, idx: number, listIdx?: number): void => {
                event.dataTransfer.setData(WatchlistHelper.ITEM_KEY, JSON.stringify(item));
                event.dataTransfer.setData(WatchlistHelper.ITEM_IDX_KEY, String(idx));
                event.dataTransfer.setData(WatchlistHelper.LIST_IDX_KEY, String(listIdx));
            },
            handleSave: (event: React.DragEvent<HTMLElement>, addItem: (item: CardHorizontalProps) => void) => {
                const item = WatchlistHelper.fromEvent.item.retrieve(event);
                if (item) addItem(item);
            },
            handleMove: (event: React.DragEvent<HTMLElement>, targetListIdx: number, moveItem: (item: CardHorizontalProps, sourceListIdx: number, sourceItemIdx: number) => void) => {
                const item = WatchlistHelper.fromEvent.item.retrieve(event);
                const itemIdx = WatchlistHelper.fromEvent.item.retrieveIdx(event);
                const sourceListIdx = WatchlistHelper.fromEvent.list.retrieveIdx(event);
                if (item && targetListIdx !== sourceListIdx) moveItem(item, sourceListIdx, itemIdx);
            },
            handleSwap: (event: React.DragEvent<HTMLElement>, swapItem: (targetItemIdx: number) => void) => {
                const targetItemIdx = WatchlistHelper.fromEvent.item.retrieveIdx(event);
                swapItem(targetItemIdx);
            },
        },
        list: {
            retrieve: (event: React.DragEvent<HTMLElement>): number | boolean =>
                event.dataTransfer.getData(WatchlistHelper.LIST_KEY) !== "" && +event.dataTransfer.getData(WatchlistHelper.LIST_KEY),
            retrieveIdx: (event: React.DragEvent<HTMLElement>): number =>
                Number(event.dataTransfer.getData(WatchlistHelper.LIST_IDX_KEY)),
            save: (event: React.DragEvent<HTMLElement>, idx: number): void => {
                if (!WatchlistHelper.fromEvent.item.retrieve(event))
                    event.dataTransfer.setData(WatchlistHelper.LIST_KEY, String(idx))
            },
            swap: (event: React.DragEvent<HTMLElement>, swap: (target: number) => void) => {
                const list = WatchlistHelper.fromEvent.list.retrieve(event);
                if (typeof list === 'number') swap(list);
            }
        },
    };

    public static fromLocalStorage = {
        list: {
            retrieve: (): ListProps[] =>
                JSON.parse(localStorage.getItem(WatchlistHelper.LIST_KEY) || "[]"),
            save: (lists: ListProps[]) =>
                localStorage.setItem(WatchlistHelper.LIST_KEY, JSON.stringify(lists)),
            find: (query?: string): ListProps | undefined =>
                WatchlistHelper.list.find(query || "", WatchlistHelper.fromLocalStorage.list.retrieve()),
        },
        item: {
            retrieveIdx: (query?: string): { itemIdx: number, listIdx: number } | undefined =>
                WatchlistHelper.item.retrieveIdx(query || "", WatchlistHelper.fromLocalStorage.list.retrieve()),
            find: (query?: string): CardHorizontalProps | undefined =>
                WatchlistHelper.item.find(query || "", WatchlistHelper.fromLocalStorage.list.retrieve()),
            save: (listIdx: number, item: CardHorizontalProps) =>
                WatchlistHelper.item.save(
                    listIdx, item, WatchlistHelper.fromLocalStorage.list.retrieve(), WatchlistHelper.fromLocalStorage.list.save
                ),
            delete: (listIdx: number, itemIdx: number) =>
                WatchlistHelper.item.delete(
                    listIdx, itemIdx, WatchlistHelper.fromLocalStorage.list.retrieve(), WatchlistHelper.fromLocalStorage.list.save,
                ),
            deleteByName: (query?: string) => {
                const item = WatchlistHelper.fromLocalStorage.item.retrieveIdx(query);
                if (!item) return;
                WatchlistHelper.fromLocalStorage.item.delete(item.listIdx, item.itemIdx);
            },
            exists: (query?: string) => WatchlistHelper.fromLocalStorage.item.retrieveIdx(query) !== undefined

        }

    }

}

export default WatchlistHelper;