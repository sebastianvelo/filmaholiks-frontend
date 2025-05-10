import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import { WatchlistColumnProps } from "client/views/components/watch-list/list/WatchlistColumn";

class WatchlistHelper {

    public static ITEM_KEY = "item";

    public static ITEM_IDX_KEY = "item_idx";

    public static LIST_KEY = "list";

    public static LIST_IDX_KEY = "list_idx";

    public static item = {
        retrieveIdx: (query: string, lists: WatchlistColumnProps[]): { itemId: string | number, itemIdx: number, listIdx: number } | undefined => {
            const listIdx = lists.findIndex(list => list.items.some(item => item.title === query));
            if (listIdx === -1) return undefined;
            const itemIdx = lists[listIdx].items.findIndex(item => item.title === query);
            return {
                itemId: lists[listIdx].items[itemIdx].id,
                itemIdx,
                listIdx,
            };
        },
    };

    public static list = {
        dummy: (lists: WatchlistColumnProps[]) => ({
            title: `List ${lists.length + 1}`,
            items: []
        }) as unknown as WatchlistColumnProps,
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
            handleMove: (event: React.DragEvent<HTMLElement>, targetListIdx: number, moveItem: (itemIdx: number, sourceListIdx: number, targetListIdx: number) => void) => {
                const item = WatchlistHelper.fromEvent.item.retrieve(event);
                const itemIdx = WatchlistHelper.fromEvent.item.retrieveIdx(event);
                const sourceListIdx = WatchlistHelper.fromEvent.list.retrieveIdx(event);
                if (item && targetListIdx !== sourceListIdx) moveItem(itemIdx, sourceListIdx, targetListIdx);
            },
            handleSwap: (event: React.DragEvent<HTMLElement>, targetListIdx: number | undefined, swapItems: (targetItemIdx: number) => void) => {
                const targetItemIdx = WatchlistHelper.fromEvent.item.retrieveIdx(event);
                const sourceListIdx = WatchlistHelper.fromEvent.list.retrieveIdx(event);
                if (sourceListIdx === targetListIdx)
                    swapItems(targetItemIdx);
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

}

export default WatchlistHelper;