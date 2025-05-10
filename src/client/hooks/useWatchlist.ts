import WatchlistRequest from "api/request/watch-list/WatchlistRequest";
import { AxiosRequestConfig } from "axios";
import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import SessionUserHelper from "client/helper/SessionUserHelper";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { WatchlistColumnProps } from "client/views/components/watch-list/list/WatchlistColumn";
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
    const userName = SessionUserHelper.getUser()?.userName ?? "";

    const updateLists = (newLists: WatchlistColumnProps[]) => {
        setLists([...newLists]);
    };

    const changeListTitle = (listIdx: number, title: string) => {
        const list = lists[listIdx];
        list.title = title;
        lists[listIdx] = list;
        updateLists([...lists]);
        WatchlistRequest[mediaType].list.change(userName, listIdx, title);
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
        WatchlistRequest[mediaType].list.swap(userName, idxA, idxB);
    };

    const addList = () => {
        updateLists([...lists, WatchlistHelper.list.dummy(lists)]);
        WatchlistRequest[mediaType].list.add(userName, WatchlistHelper.list.dummy(lists).title as string);
    };

    const deleteList = (listIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    updateLists([...lists.filter((_, idx) => idx !== listIdx)]);
                    WatchlistRequest[mediaType].list.delete(userName, listIdx);
                }
            }
        });
    };

    const saveItem = (listIdx: number, item: CardHorizontalProps) => {
        lists[listIdx].items.push(item);
        updateLists([...lists]);
        WatchlistRequest[mediaType].item.save(userName, listIdx, item.id ?? "");
    };

    const deleteItem = (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => {
        if (!requiresConfirmation) {
            lists[listIdx].items = lists[listIdx].items.filter((it) => it.id !== itemId);
            updateLists([...lists]);
            WatchlistRequest[mediaType].item.delete(userName, listIdx, itemId);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    lists[listIdx].items = lists[listIdx].items.filter((it) => it.id !== itemId);
                    updateLists([...lists]);
                    WatchlistRequest[mediaType].item.delete(userName, listIdx, itemId);
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
        WatchlistRequest[mediaType].item.delete(userName, item.listIdx, item.itemId);
    };

    const moveItem = (itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
        const item = lists[sourceListIdx].items[itemIdx];
        lists[targetListIdx].items.push(item);
        lists[sourceListIdx].items.splice(itemIdx, 1);
        updateLists([...lists]);
        WatchlistRequest[mediaType].item.move(userName, itemIdx, sourceListIdx, targetListIdx);
    };

    const swapItems = (listIdx: number, idxA: number, idxB: number) => {
        const itemA = lists[listIdx].items[idxA];
        const itemB = lists[listIdx].items[idxB];
        lists[listIdx].items[idxB] = itemA;
        lists[listIdx].items[idxA] = itemB;
        updateLists([...lists]);
        WatchlistRequest[mediaType].item.swap(userName, listIdx, idxA, idxB);
    };

    const findItem = (query?: string) => {
        const idxs = WatchlistHelper.item.retrieveIdx(query ?? "", lists);
        if (!idxs) return undefined;
        return lists[idxs.listIdx].items[idxs.itemIdx];
    };

    const searchItems = (query: string) =>
        WatchlistRequest[mediaType].search(userName, query);

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
