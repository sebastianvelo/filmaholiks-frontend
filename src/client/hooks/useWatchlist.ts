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

const useWatchlist = (apiColumns: ListProps[]) => {
    const listsFromLS = WatchlistService.fromLocalStorage.list.retrieve();
    const [lists, setLists] = useState<ListProps[]>(listsFromLS.length ? listsFromLS : apiColumns);

    const updateLists = (newColumns: ListProps[]) => {
        setLists([...newColumns]);
        WatchlistService.fromLocalStorage.list.save([...newColumns]);
    };

    const changeListTitle = (columnIdx: number, title: string) => {
        const column = lists[columnIdx];
        column.title = title;
        lists[columnIdx] = column;
        updateLists([...lists]);
    };

    const deleteList = (columnIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) updateLists(lists.filter((_, idx) => idx !== columnIdx));
            }
        });
    };

    const addList = () => {
        const dummyList: any = {
            title: `List ${lists.length + 1}`,
            items: []
        };
        updateLists([...lists, dummyList]);
    };

    const swapLists = (idxA: number, idxB: number) => {
        const columnA = lists[idxA];
        const columnB = lists[idxB];
        lists[idxB] = columnA;
        lists[idxA] = columnB;
        updateLists([...lists]);
    };

    const addItem = (columnIdx: number, item: ItemProps) =>
        WatchlistService.item.save(lists, columnIdx, item, updateLists);

    const deleteItem = (requiresConfirmation: boolean, columnIdx: number, itemIdx: number) => {
        if (!requiresConfirmation) {
            WatchlistService.item.delete(lists, columnIdx, itemIdx, updateLists);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    WatchlistService.item.delete(lists, columnIdx, itemIdx, updateLists);
                    Swal.fire('Deleted!', '', 'success')
                }
            }
        });
    };

    const swapItems = (list: number, idxA: number, idxB: number) => {
        const itemA = lists[list].items[idxA];
        const itemB = lists[list].items[idxB];
        lists[list].items[idxB] = itemA;
        lists[list].items[idxA] = itemB;
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
        }
    };
};

export default useWatchlist;
