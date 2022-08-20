import { AxiosRequestConfig } from "axios";
import { CardHorizontalProps } from "client/common/components/card-horizontal/CardHorizontal";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { ListProps } from "client/views/components/watch-list/list/List";
import MediaType from "model/common/MediaType";
import { useState } from "react";
import Swal, { SweetAlertResult } from 'sweetalert2';

const requireConfirmation = (config: { title: string, cback: (result: SweetAlertResult<any>) => void }) => {
    Swal.fire({
        title: config.title,
        showDenyButton: true,
        denyButtonText: `Delete`,
        confirmButtonText: 'Cancel',
    }).then(config.cback);
};

export interface UseWatchlist {
    list: {
        value: ListProps[];
        changeTitle: (listIdx: number, title: string) => void;
        swap: (idxA: number, idxB: number) => void;
        add: () => void;
        delete: (listIdx: number) => void;
        find: (query: string) => ListProps | undefined;
        retrieveAll: ListProps[];
    };
    item: {
        delete: (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => void;
        deleteByName: (query: string) => void;
        save: (listIdx: number, item: CardHorizontalProps) => void;
        swap: (listIdx: number, idxA: number, idxB: number) => void;
        move: (itemIdx: number, sourceListIdx: number, targetListIdx: number) => void;
        find: (query?: string) => CardHorizontalProps | undefined;
        search: (query: string) => AxiosRequestConfig<any>;
    }
}

const useWatchlist = (mediaType: MediaType, apiLists?: ListProps[]): UseWatchlist => {
    const [lists, setLists] = useState<ListProps[]>(apiLists ?? []);

    const updateLists = (newLists: ListProps[]) => {
        setLists([...newLists]);
    };

    const changeListTitle = (listIdx: number, title: string) => {
        const list = lists[listIdx];
        list.title = title;
        lists[listIdx] = list;
        updateLists([...lists]);
    };

    const findList = (query: string) =>
        WatchlistHelper.list.find(query, lists);

    const swapLists = (idxA: number, idxB: number) =>
        WatchlistHelper.list.swap(mediaType, idxA, idxB, lists, updateLists);

    const addList = () =>
        WatchlistHelper.list.add(mediaType, lists, updateLists);

    const deleteList = (listIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed)
                    WatchlistHelper.list.delete(mediaType, listIdx, lists, updateLists);
            }
        });
    };

    const saveItem = (listIdx: number, item: CardHorizontalProps) =>
        WatchlistHelper.item.save(mediaType, listIdx, item, lists, updateLists);

    const deleteItem = (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => {
        if (!requiresConfirmation) {
            WatchlistHelper.item.delete(mediaType, listIdx, itemId, lists, updateLists);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    WatchlistHelper.item.delete(mediaType, listIdx, itemId, lists, updateLists);
                    Swal.fire('Deleted!', '', 'success')
                }
            }
        });
    };

    const deleteItemByName = (query: string) =>
        WatchlistHelper.item.deleteByName(mediaType, query, lists, updateLists);

    const moveItem = (itemIdx: number, sourceListIdx: number, targetListIdx: number) =>
        WatchlistHelper.item.move(mediaType, sourceListIdx, targetListIdx, itemIdx, lists, updateLists);

    const swapItems = (listIdx: number, idxA: number, idxB: number) =>
        WatchlistHelper.item.swap(mediaType, listIdx, idxA, idxB, lists, updateLists);

    const findItem = (query?: string) =>
        WatchlistHelper.item.find(query ?? "", lists);

    const searchItems = (query: string) =>
        WatchlistHelper.item.search(mediaType, query);

    return {
        list: {
            value: lists,
            changeTitle: changeListTitle,
            swap: swapLists,
            add: addList,
            delete: deleteList,
            find: findList,
            retrieveAll: lists
        },
        item: {
            delete: deleteItem,
            deleteByName: deleteItemByName,
            save: saveItem,
            swap: swapItems,
            move: moveItem,
            find: findItem,
            search: searchItems,
        }
    };
};

export default useWatchlist;
