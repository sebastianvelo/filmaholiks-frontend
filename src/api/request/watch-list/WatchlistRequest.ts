import AxiosClient from "api/auth/AxiosClient";
import Collection from "api/common/Collection";
import { WatchlistColumnProps } from "client/views/components/watch-list/list/WatchlistColumn";
import MediaType from "shared/types/MediaType";
import BackendRequest from "../BackendRequest";

class WatchlistRequest extends BackendRequest {
    protected collection: string = Collection.WATCH_LIST;

    private presenter = (mediaType: MediaType) => ({
        search: (uid: string, query: string) =>
            this.get(`/user/${uid}/${mediaType}/search/${query}`),
        saveAll: (uid: string, lists: WatchlistColumnProps[]) => {
            const config = this.put(`/user/${uid}/${mediaType}`, lists);
            AxiosClient.request(config);
        },
        item: {
            save: (uid: string, listIdx: number, itemId: number | string) => {
                const config = this.post(`/user/${uid}/${mediaType}/${listIdx}/item`, { itemId });
                AxiosClient.request(config);
            },
            delete: (uid: string, listIdx: number, itemId: number | string) => {
                const config = this.delete(`/user/${uid}/${mediaType}/${listIdx}/item`, { itemId });
                AxiosClient.request(config);
            },
            swap: (uid: string, listIdx: number, itemIdx1: number, itemIdx2: number) => {
                const config = this.put(`/user/${uid}/${mediaType}/swap/item`, { listIdx, itemIdx1, itemIdx2 });
                AxiosClient.request(config);
            },
            move: (uid: string, itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
                const config = this.put(`/user/${uid}/${mediaType}/move/item`, { itemIdx, sourceListIdx, targetListIdx });
                AxiosClient.request(config);
            },
        },
        list: {
            add: (uid: string, title: string) => {
                const config = this.post(`/user/${uid}/${mediaType}/list`, { title });
                AxiosClient.request(config);
            },
            delete: (uid: string, listIdx: number) => {
                const config = this.delete(`/user/${uid}/${mediaType}/${listIdx}/list`);
                AxiosClient.request(config);
            },
            swap: (uid: string, listIdx1: number, listIdx2: number) => {
                const config = this.put(`/user/${uid}/${mediaType}/swap/list`, { listIdx1, listIdx2 });
                AxiosClient.request(config);
            },
            change: (uid: string, listIdx: number, title: string) => {
                const config = this.put(`/user/${uid}/${mediaType}/change/list`, { listIdx, title });
                AxiosClient.request(config);
            },
        },
    });

    public show = this.presenter(MediaType.SHOW);

    public movie = this.presenter(MediaType.MOVIE);
}

export default new WatchlistRequest();
