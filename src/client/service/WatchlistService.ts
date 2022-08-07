import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { ListProps } from "client/views/pages/watchlist/lists/list/List";

class WatchlistService {

    public static ITEM_KEY = "item";

    public static ITEM_IDX_KEY = "item_idx";

    public static LIST_KEY = "list";

    public static LIST_IDX_KEY = "list_idx";

    public static item = {
        save: (lists: ListProps[], listIdx: number, item: ItemProps, updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items.push(item);
            updateLists([...lists]);
        },
        delete: (lists: ListProps[], listIdx: number, itemIdx: number, updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items = lists[listIdx].items.filter((_, idx) => idx !== itemIdx);
            updateLists([...lists]);
        },
    };

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
            find: (query?: string): ListProps | undefined => {
                const idxs = WatchlistService.fromLocalStorage.item.retrieveIdx(query);
                if (!idxs) return undefined;
                return WatchlistService.fromLocalStorage.list.retrieve()[idxs.listIdx];
            },

        },
        item: {
            retrieveIdx: (query?: string): { itemIdx: number, listIdx: number } | undefined => {
                const lists = WatchlistService.fromLocalStorage.list.retrieve();
                const listIdx = lists.findIndex(list => list.items.some(item => item.title === query));
                if (listIdx === -1) return undefined;
                const itemIdx = lists[listIdx].items.findIndex(item => item.title === query);
                return {
                    itemIdx,
                    listIdx,
                };
            },
            find: (query?: string): ItemProps | undefined => {
                const idxs = WatchlistService.fromLocalStorage.item.retrieveIdx(query);
                if (!idxs) return undefined;
                return WatchlistService.fromLocalStorage.list.retrieve()[idxs.listIdx].items[idxs.itemIdx];
            },
            save: (listIdx: number, item: ItemProps) =>
                WatchlistService.item.save(
                    WatchlistService.fromLocalStorage.list.retrieve(), listIdx, item, WatchlistService.fromLocalStorage.list.save
                ),
            delete: (listIdx: number, itemIdx: number) =>
                WatchlistService.item.delete(
                    WatchlistService.fromLocalStorage.list.retrieve(), listIdx, itemIdx, WatchlistService.fromLocalStorage.list.save,
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