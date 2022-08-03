import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { ListProps } from "client/views/pages/watchlist/lists/list/List";
import { useState } from "react";
import Swal, { SweetAlertResult } from 'sweetalert2';

export const getListsFromLocalStorage = (): ListProps[] => JSON.parse(localStorage.getItem("columns") || "[]");

export const setListsInLocalStorage = (columns: ListProps[]) => localStorage.setItem("columns", JSON.stringify(columns));

const requireConfirmation = (config: { title: string, cback: (result: SweetAlertResult<any>) => void }) => {
    Swal.fire({
        title: config.title,
        showDenyButton: true,
        denyButtonText: `Delete`,
        confirmButtonText: 'Cancel',
    }).then(config.cback);
};

const saveCard = (columns: ListProps[], columnIdx: number, item: ItemProps, updateColumns: (newColumns: ListProps[]) => void) => {
    columns[columnIdx].items.push(item);
    updateColumns([...columns]);
};

const deleteCard = (columns: ListProps[], columnIdx: number, itemIdx: number, updateColumns: (newColumns: ListProps[]) => void) => {
    columns[columnIdx].items = columns[columnIdx].items.filter((_, idx) => idx !== itemIdx);
    updateColumns([...columns]);
};


export const getItemFromLocalStorage = (query?: string): { itemIdx: number, columnIdx: number } | undefined => {
    const columns = getListsFromLocalStorage();
    const columnIdx = columns.findIndex(column => column.items.some(item => item.title === query));
    if (columnIdx === -1) return undefined;
    const itemIdx = columns[columnIdx].items.findIndex(item => item.title === query);
    return {
        itemIdx,
        columnIdx,
    };
};

export const saveCardInLocalStorage = (columnIdx: number, item: ItemProps) => saveCard(getListsFromLocalStorage(), columnIdx, item, setListsInLocalStorage);
export const deleteCardInLocalStorage = (columnIdx: number, itemIdx: number) => deleteCard(getListsFromLocalStorage(), columnIdx, itemIdx, setListsInLocalStorage);
export const deleteCardInLocalStorageByName = (query?: string) => {
    const item = getItemFromLocalStorage(query);
    if (!item) return;
    deleteCardInLocalStorage(item.columnIdx, item.itemIdx);
};
export const existsInLocalStorageByName = (query?: string) => getItemFromLocalStorage(query) !== undefined;

const useWatchlist = (apiColumns: ListProps[]) => {
    const [lists, setLists] = useState<ListProps[]>(getListsFromLocalStorage().length ? getListsFromLocalStorage() : apiColumns);

    const updateLists = (newColumns: ListProps[]) => {
        setLists([...newColumns]);
        setListsInLocalStorage([...newColumns]);
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

    const addCard = (columnIdx: number, item: ItemProps) => saveCard(lists, columnIdx, item, updateLists);

    const removeCard = (requiresConfirmation: boolean, columnIdx: number, itemIdx: number) => {
        if (!requiresConfirmation) {
            deleteCard(lists, columnIdx, itemIdx, updateLists);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    deleteCard(lists, columnIdx, itemIdx, updateLists);
                    Swal.fire('Deleted!', '', 'success')
                }
            }
        });
    };

    const swapCards = (columnA: number, idxA: number, columnB: number, idxB: number) => {
        const itemA = lists[columnA].items[idxA];
        const itemB = lists[columnB].items[idxB];
        lists[columnA].items[idxA] = itemB;
        lists[columnA].items[idxB] = itemA;
        updateLists([...lists]);
    };

    return {
        lists: {
            value: lists,
            changeTitle: changeListTitle,
            swap: swapLists,
            add: addList,
            delete: deleteList,
        },
        cards: {
            delete: removeCard,
            add: addCard,
            swap: swapCards,
        }
    };
};

export default useWatchlist;
