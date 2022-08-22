import WatchlistRequest from "api/request/watch-list/WatchlistRequest";
import { CardHorizontalProps } from "client/common/components/card-horizontal/CardHorizontal";
import { ListProps } from "client/views/components/watch-list/list/List";
import MediaType from "shared/types/MediaType";

const userName = "sebastianvelo";

class WatchlistHelper {

    public static ITEM_KEY = "item";

    public static ITEM_IDX_KEY = "item_idx";

    public static LIST_KEY = "list";

    public static LIST_IDX_KEY = "list_idx";

    public static item = {
        retrieveIdx: (query: string, lists: ListProps[]): { itemId: string | number, itemIdx: number, listIdx: number } | undefined => {
            const listIdx = lists.findIndex(list => list.items.some(item => item.title === query));
            if (listIdx === -1) return undefined;
            const itemIdx = lists[listIdx].items.findIndex(item => item.title === query);
            return {
                itemId: lists[listIdx].items[itemIdx].id,
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
        save: (mediaType: MediaType, listIdx: number, item: CardHorizontalProps, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items.push(item);
            updateLists([...lists]);
            WatchlistRequest[mediaType].item.save(userName, listIdx, item.id ?? "");
        },
        move: (mediaType: MediaType, sourceListIdx: number, targetListIdx: number, itemIdx: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const item = lists[sourceListIdx].items[itemIdx];
            lists[targetListIdx].items.push(item);
            lists[sourceListIdx].items.splice(itemIdx, 1);
            updateLists([...lists]);
            WatchlistRequest[mediaType].item.move(userName, itemIdx, sourceListIdx, targetListIdx);
        },
        delete: (mediaType: MediaType, listIdx: number, itemId: string | number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            lists[listIdx].items = lists[listIdx].items.filter((it) => it.id !== itemId);
            updateLists([...lists]);
            WatchlistRequest[mediaType].item.delete(userName, listIdx, itemId);
        },
        deleteByName: (mediaType: MediaType, query: string, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const item = WatchlistHelper.item.retrieveIdx(query, lists);
            if (!item) return;
            WatchlistHelper.item.delete(mediaType, item.listIdx, item.itemId, lists, updateLists);
        },
        swap: (mediaType: MediaType, listIdx: number, idxA: number, idxB: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const itemA = lists[listIdx].items[idxA];
            const itemB = lists[listIdx].items[idxB];
            lists[listIdx].items[idxB] = itemA;
            lists[listIdx].items[idxA] = itemB;
            updateLists([...lists]);
            WatchlistRequest[mediaType].item.swap(userName, listIdx, idxA, idxB);
        },
        search: (mediaType: MediaType, query: string) =>
            WatchlistRequest[mediaType].search(userName, query),
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
        add: (mediaType: MediaType, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            updateLists([...lists, WatchlistHelper.list.dummy(lists)]);
            WatchlistRequest[mediaType].list.add(userName, WatchlistHelper.list.dummy(lists).title as string);
        },
        delete: (mediaType: MediaType, listIdx: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            updateLists([...lists.filter((_, idx) => idx !== listIdx)]);
            WatchlistRequest[mediaType].list.delete(userName, listIdx);
        },
        swap: (mediaType: MediaType, idxA: number, idxB: number, lists: ListProps[], updateLists: (newLists: ListProps[]) => void) => {
            const listA = lists[idxA];
            const listB = lists[idxB];
            lists[idxB] = listA;
            lists[idxA] = listB;
            updateLists([...lists]);
            WatchlistRequest[mediaType].list.swap(userName, idxA, idxB);
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