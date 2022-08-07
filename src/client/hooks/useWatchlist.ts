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

const dummyList: any = (lists: ListProps[]) => ({
    title: `List ${lists.length + 1}`,
    items: []
});

const useWatchlist = (apiLists: ListProps[]) => {
    const listsFromLS = WatchlistService.fromLocalStorage.list.retrieve();
    const [lists, setLists] = useState<ListProps[]>(listsFromLS.length ? listsFromLS : apiLists);

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

    const deleteList = (listIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) updateLists(lists.filter((_, idx) => idx !== listIdx));
            }
        });
    };

    const addList = () => {
        updateLists([...lists, dummyList(lists)]);
    };

    const swapLists = (idxA: number, idxB: number) => {
        const listA = lists[idxA];
        const listB = lists[idxB];
        lists[idxB] = listA;
        lists[idxA] = listB;
        updateLists([...lists]);
    };

    const addItem = (listIdx: number, item: ItemProps) =>
        WatchlistService.item.save(lists, listIdx, item, updateLists);

    const deleteItem = (requiresConfirmation: boolean, listIdx: number, itemIdx: number) => {
        if (!requiresConfirmation) {
            WatchlistService.item.delete(lists, listIdx, itemIdx, updateLists);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    WatchlistService.item.delete(lists, listIdx, itemIdx, updateLists);
                    Swal.fire('Deleted!', '', 'success')
                }
            }
        });
    };

    const moveItem = (item: ItemProps, sourceListIdx: number, sourceItemIdx: number, targetListIdx: number) => {
        addItem(targetListIdx, item);
        deleteItem(false, sourceListIdx, sourceItemIdx);
    };

    const swapItems = (listIdx: number, idxA: number, idxB: number) => {
        console.log(listIdx, idxA, idxB);
        const itemA = lists[listIdx].items[idxA];
        const itemB = lists[listIdx].items[idxB];
        lists[listIdx].items[idxB] = itemA;
        lists[listIdx].items[idxA] = itemB;
        updateLists([...lists]);
    };

    return {
        list: {
            value: lists,
            changeTitle: changeListTitle,
            swap: swapLists,
            add: addList,
            delete: deleteList,
        },
        item: {
            delete: deleteItem,
            add: addItem,
            swap: swapItems,
            move: moveItem,
        }
    };
};

export default useWatchlist;
