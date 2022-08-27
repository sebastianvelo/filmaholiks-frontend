import { AxiosRequestConfig } from "axios";
import { CardHorizontalProps } from "client/common/components/card-horizontal/CardHorizontal";
import { ListProps } from "client/views/components/watch-list/list/List";
import MediaType from "shared/types/MediaType";
import useWatchlist, { UseWatchlist } from "./useWatchlist";

export interface UseList {
    changeListTitle: (title: string) => void;
    swapLists: (targetListIdx: number) => void;
    deleteList: () => void;
    addItem: (item: CardHorizontalProps) => void;
    deleteItem: (itemId: string | number, requiresConfirmation?: boolean) => void;
    deleteItemOfOtherList: (listIdx: number, itemId: string | number) => void;
    swapItems: (itemAIdx: number, itemBIdx: number) => void;
    moveItem: (itemIdx: number, sourceListIdx: number, targetListIdx: number) => void;
    searchItems: (query: string) => AxiosRequestConfig<any>;
}

const useList = (mediaType: MediaType, apiLists?: ListProps[]): [UseWatchlist, (idx: number) => UseList] => {
    const service = useWatchlist(mediaType, apiLists);
    const listService = (idx: number): UseList => ({
        changeListTitle: (title: string) => service.list.changeTitle(idx, title),
        swapLists: (targetListIdx: number) => service.list.swap(idx, targetListIdx),
        deleteList: () => service.list.delete(idx),
        addItem: (item: CardHorizontalProps) => service.item.save(idx, item),
        deleteItem: (itemId: string | number, requiresConfirmation?: boolean) => service.item.delete(idx, itemId, requiresConfirmation),
        deleteItemOfOtherList: (listIdx: number, itemId: string | number) => service.item.delete(listIdx, itemId, true),
        swapItems: (itemAIdx: number, itemBIdx: number) => service.item.swap(idx, itemAIdx, itemBIdx),
        moveItem: service.item.move,
        searchItems: service.item.search,
    });

    return [service, listService];
};

export default useList;
