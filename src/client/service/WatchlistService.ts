import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { ListProps } from "client/views/pages/watchlist/lists/list/List";

class WatchlistService {

    public static ITEM_KEY = "item";

    public static ITEM_IDX_KEY = "item_idx";

    public static LIST_KEY = "list";

    public static LIST_IDX_KEY = "list_idx";

    public static item = {
        save: (columns: ListProps[], columnIdx: number, item: ItemProps, updateColumns: (newColumns: ListProps[]) => void) => {
            columns[columnIdx].items.push(item);
            updateColumns([...columns]);
        },
        delete: (columns: ListProps[], columnIdx: number, itemIdx: number, updateColumns: (newColumns: ListProps[]) => void) => {
            columns[columnIdx].items = columns[columnIdx].items.filter((_, idx) => idx !== itemIdx);
            updateColumns([...columns]);
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
            handleSave: (event: React.DragEvent<HTMLElement>, listIdx: number, addItem: (item: ItemProps) => void) => {
                const item = WatchlistService.fromEvent.item.retrieve(event);
                const targetListIdx = WatchlistService.fromEvent.list.retrieveIdx(event);
                if (item && (targetListIdx !== listIdx)) addItem(item);
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
            save: (columns: ListProps[]) =>
                localStorage.setItem(WatchlistService.LIST_KEY, JSON.stringify(columns)),

        },
        item: {
            retrieve: (query?: string): { itemIdx: number, columnIdx: number } | undefined => {
                const columns = WatchlistService.fromLocalStorage.list.retrieve();
                const columnIdx = columns.findIndex(column => column.items.some(item => item.title === query));
                if (columnIdx === -1) return undefined;
                const itemIdx = columns[columnIdx].items.findIndex(item => item.title === query);
                return {
                    itemIdx,
                    columnIdx,
                };
            },
            save: (columnIdx: number, item: ItemProps) =>
                WatchlistService.item.save(
                    WatchlistService.fromLocalStorage.list.retrieve(), columnIdx, item, WatchlistService.fromLocalStorage.list.save
                ),
            delete: (columnIdx: number, itemIdx: number) =>
                WatchlistService.item.delete(
                    WatchlistService.fromLocalStorage.list.retrieve(), columnIdx, itemIdx, WatchlistService.fromLocalStorage.list.save,
                ),
            deleteByName: (query?: string) => {
                const item = WatchlistService.fromLocalStorage.item.retrieve(query);
                if (!item) return;
                WatchlistService.fromLocalStorage.item.delete(item.columnIdx, item.itemIdx);
            },
            exists: (query?: string) => WatchlistService.fromLocalStorage.item.retrieve(query) !== undefined

        }

    }

}

export default WatchlistService;