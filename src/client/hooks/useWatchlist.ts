import { useState } from "react";
import Swal, { SweetAlertResult } from 'sweetalert2';
import WatchlistHelper from "client/helper/WatchlistHelper";
import { CardHorizontalProps } from "client/common/components/card-horizontal/CardHorizontal";
import { ListProps } from "client/views/components/watch-list/list/List";
import WatchlistRequest from "api/request/watch-list/WatchlistRequest";

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
        delete: (listIdx: number, itemIdx: number, requiresConfirmation?: boolean) => void;
        deleteByName: (query: string) => void;
        save: (listIdx: number, item: CardHorizontalProps) => void;
        swap: (listIdx: number, idxA: number, idxB: number) => void;
        move: (item: CardHorizontalProps, sourceListIdx: number, sourceItemIdx: number, targetListIdx: number) => void;
        find: (query?: string) => CardHorizontalProps | undefined;
    }
}

const useWatchlist = (apiLists?: ListProps[]): UseWatchlist => {
    const listsFromLS = WatchlistHelper.fromLocalStorage.list.retrieve();
    const [lists, setLists] = useState<ListProps[]>(apiLists?.length ? apiLists : [] ?? listsFromLS);

    const updateLists = (newLists: ListProps[]) => {
        setLists([...newLists]);
        WatchlistHelper.fromLocalStorage.list.save([...newLists]);
        WatchlistRequest.shows.save("sebastianvelo", [...newLists]);
    };

    const changeListTitle = (listIdx: number, title: string) => {
        const list = lists[listIdx];
        list.title = title;
        lists[listIdx] = list;
        updateLists([...lists]);
    };

    const findList = (query: string) => WatchlistHelper.list.find(query, lists);

    const swapLists = (idxA: number, idxB: number) => WatchlistHelper.list.swap(idxA, idxB, lists, updateLists);

    const addList = () => WatchlistHelper.list.add(lists, updateLists);

    const deleteList = (listIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed)
                    WatchlistHelper.list.delete(listIdx, lists, updateLists);
            }
        });
    };

    const saveItem = (listIdx: number, item: CardHorizontalProps) => WatchlistHelper.item.save(listIdx, item, lists, updateLists);

    const deleteItem = (listIdx: number, itemIdx: number, requiresConfirmation?: boolean) => {
        if (!requiresConfirmation) {
            WatchlistHelper.item.delete(listIdx, itemIdx, lists, updateLists);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    WatchlistHelper.item.delete(listIdx, itemIdx, lists, updateLists);
                    Swal.fire('Deleted!', '', 'success')
                }
            }
        });
    };

    const deleteItemByName = (query: string) => {
        WatchlistHelper.item.deleteByName(query, lists, updateLists);
    };

    const moveItem = (item: CardHorizontalProps, sourceListIdx: number, sourceItemIdx: number, targetListIdx: number) => {
        saveItem(targetListIdx, item);
        deleteItem(sourceListIdx, sourceItemIdx, false);
    };

    const swapItems = (listIdx: number, idxA: number, idxB: number) => WatchlistHelper.item.swap(listIdx, idxA, idxB, lists, updateLists);

    const findItem = (query?: string) => WatchlistHelper.item.find(query ?? "", lists);

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
            find: findItem
        }
    };
};

export default useWatchlist;
