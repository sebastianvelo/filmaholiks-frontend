import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import WatchlistRequest from "api/request/watch-list/WatchlistRequest";
import { AxiosRequestConfig } from "axios";
import SessionUserHelper from "client/helper/SessionUserHelper";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { WatchlistColumnProps } from "client/views/components/watch-list/list/WatchlistColumn";
import { auth } from "config/firebase/firebaseApp";
import { useState } from "react";
import MediaType from "shared/types/MediaType";
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
        value: WatchlistColumnProps[];
        changeTitle: (listIdx: number, title: string) => void;
        swap: (idxA: number, idxB: number) => void;
        add: () => void;
        delete: (listIdx: number) => void;
        find: (query: string) => WatchlistColumnProps | undefined;
        retrieveAll: WatchlistColumnProps[];
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

const useWatchlist = (mediaType: MediaType, apiLists?: WatchlistColumnProps[]): UseWatchlist => {
    const [lists, setLists] = useState<WatchlistColumnProps[]>(apiLists ?? []);
    const uid = auth.currentUser!.uid;
    const req = WatchlistRequest[mediaType];

    const updateLists = (newLists: WatchlistColumnProps[]) => {
        setLists([...newLists]);
    };

    const changeListTitle = (listIdx: number, title: string) => {
        const list = lists[listIdx];
        list.title = title;
        lists[listIdx] = list;
        updateLists([...lists]);
        req.list.change(uid, listIdx, title);
    };

    const findList = (query: string) => {
        const idxs = WatchlistHelper.item.retrieveIdx(query, lists);
        if (!idxs) return undefined;
        return lists[idxs.listIdx];
    };

    const swapLists = (idxA: number, idxB: number) => {
        const listA = lists[idxA];
        const listB = lists[idxB];
        lists[idxB] = listA;
        lists[idxA] = listB;
        updateLists([...lists]);
        req.list.swap(uid, idxA, idxB);
    };

    const addList = () => {
        updateLists([...lists, WatchlistHelper.list.dummy(lists)]);
        req.list.add(uid, WatchlistHelper.list.dummy(lists).title as string);
    };

    const deleteList = (listIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    updateLists([...lists.filter((_, idx) => idx !== listIdx)]);
                    req.list.delete(uid, listIdx);
                }
            }
        });
    };

    const saveItem = (listIdx: number, item: CardHorizontalProps) => {
        lists[listIdx].items.push(item);
        updateLists([...lists]);
        req.item.save(uid, listIdx, item.id ?? "");
    };

    const deleteItem = (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => {
        if (!requiresConfirmation) {
            lists[listIdx].items = lists[listIdx].items.filter((it) => it.id !== itemId);
            updateLists([...lists]);
            req.item.delete(uid, listIdx, itemId);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    lists[listIdx].items = lists[listIdx].items.filter((it) => it.id !== itemId);
                    updateLists([...lists]);
                    req.item.delete(uid, listIdx, itemId);
                    Swal.fire('Deleted!', '', 'success')
                }
            }
        });
    };

    const deleteItemByName = (query: string) => {
        const item = WatchlistHelper.item.retrieveIdx(query, lists);
        if (!item) return;
        lists[item.listIdx].items = lists[item.listIdx].items.filter((it) => it.id !== item.itemId);
        updateLists([...lists]);
        req.item.delete(uid, item.listIdx, item.itemId);
    };

    const moveItem = (itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
        const item = lists[sourceListIdx].items[itemIdx];
        lists[targetListIdx].items.push(item);
        lists[sourceListIdx].items.splice(itemIdx, 1);
        updateLists([...lists]);
        req.item.move(uid, itemIdx, sourceListIdx, targetListIdx);
    };

    const swapItems = (listIdx: number, idxA: number, idxB: number) => {
        const itemA = lists[listIdx].items[idxA];
        const itemB = lists[listIdx].items[idxB];
        lists[listIdx].items[idxB] = itemA;
        lists[listIdx].items[idxA] = itemB;
        updateLists([...lists]);
        req.item.swap(uid, listIdx, idxA, idxB);
    };

    const findItem = (query?: string) => {
        const idxs = WatchlistHelper.item.retrieveIdx(query ?? "", lists);
        if (!idxs) return undefined;
        return lists[idxs.listIdx].items[idxs.itemIdx];
    };

    const searchItems = (query: string) =>
        req.search(uid, query);

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
