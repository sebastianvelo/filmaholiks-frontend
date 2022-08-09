import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { UseWatchlist } from "./useWatchlist";

export interface UseList {
    list: {
        changeTitle: (title: string) => void;
        swap: (targetListIdx: number) => void;
        delete: () => void;
    };
    item: {
        delete: (itemIdx: number, requiresConfirmation?: boolean) => void;
        deleteItemOfOtherList: (listIdx: number, itemIdx: number) => void;
        move: (item: ItemProps, sourceListIdx: number, sourceItemIdx: number) => void;
        swap: (itemAIdx: number, itemBIdx: number) => void;
        save: (item: ItemProps) => void;
    };
}

const useList = (service: UseWatchlist, idx: number): UseList => ({
    list: {
        changeTitle: (title: string) => service.list.changeTitle(idx, title),
        swap: (targetListIdx: number) => service.list.swap(idx, targetListIdx),
        delete: () => service.list.delete(idx),
    },
    item: {
        delete: (itemIdx: number, requiresConfirmation?: boolean) => service.item.delete(idx, itemIdx, requiresConfirmation),
        deleteItemOfOtherList: (listIdx: number, itemIdx: number) => service.item.delete(listIdx, itemIdx, true),
        move: (item: ItemProps, sourceListIdx: number, sourceItemIdx: number) => service.item.move(item, sourceListIdx, sourceItemIdx, idx),
        swap: (itemAIdx: number, itemBIdx: number) => service.item.swap(idx, itemAIdx, itemBIdx),
        save: (item: ItemProps) => service.item.save(idx, item),
    }
});

export default useList;
