import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { ListProps } from "client/views/pages/watchlist/lists/list/List";
import { useState } from "react";
import Swal, { SweetAlertResult } from 'sweetalert2';
import WatchlistService from "client/service/WatchlistService";

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
        save: (listIdx: number, item: ItemProps) => void;
        swap: (listIdx: number, idxA: number, idxB: number) => void;
        move: (item: ItemProps, sourceListIdx: number, sourceItemIdx: number, targetListIdx: number) => void;
        find: (query?: string) => ItemProps | undefined;
    }
}

const useWatchlist = (apiLists?: ListProps[]): UseWatchlist => {
    const listsFromLS = WatchlistService.fromLocalStorage.list.retrieve();
    const [lists, setLists] = useState<ListProps[]>(listsFromLS.length ? listsFromLS : apiLists ?? []);

    const updateLists = (newLists: ListProps[]) => {
        setLists([...newLists]);
        WatchlistService.fromLocalStorage.list.save([...newLists]);
    };

    const changeListTitle = (listIdx: number, title: string) => {
        const list = lists[listIdx];
        list.title = title;
        lists[listIdx] = list;
        updateLists([...lists]);
    };

    const findList = (query: string) => WatchlistService.list.find(query, lists);

    const swapLists = (idxA: number, idxB: number) => WatchlistService.list.swap(idxA, idxB, lists, updateLists);

    const addList = () => WatchlistService.list.add(lists, updateLists);

    const deleteList = (listIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed)
                    WatchlistService.list.delete(listIdx, lists, updateLists);
            }
        });
    };

    const saveItem = (listIdx: number, item: ItemProps) => WatchlistService.item.save(listIdx, item, lists, updateLists);

    const deleteItem = (listIdx: number, itemIdx: number, requiresConfirmation?: boolean) => {
        if (!requiresConfirmation) {
            WatchlistService.item.delete(listIdx, itemIdx, lists, updateLists);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    WatchlistService.item.delete(listIdx, itemIdx, lists, updateLists);
                    Swal.fire('Deleted!', '', 'success')
                }
            }
        });
    };

    const deleteItemByName = (query: string) => {
        WatchlistService.item.deleteByName(query, lists, updateLists);
    };

    const moveItem = (item: ItemProps, sourceListIdx: number, sourceItemIdx: number, targetListIdx: number) => {
        saveItem(targetListIdx, item);
        deleteItem(sourceListIdx, sourceItemIdx, false);
    };

    const swapItems = (listIdx: number, idxA: number, idxB: number) => WatchlistService.item.swap(listIdx, idxA, idxB, lists, updateLists);

    const findItem = (query?: string) => WatchlistService.item.find(query ?? "", lists);

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
