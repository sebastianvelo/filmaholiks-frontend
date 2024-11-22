import axios from "axios";
import { ListProps } from "client/views/components/watch-list/list/List";
import MediaType from "shared/types/MediaType";
import APIRequest from "../APIRequest";

class WatchlistRequest extends APIRequest {
    protected collection: string = "/watch-list";

    public presenter = (mediaType: MediaType) => ({
        search: (userName: string, query: string) => this.get(`/user/${userName}/${mediaType}/search/${query}`),
        saveAll: (userName: string, lists: ListProps[]) => {
            const config = this.put(`/user/${userName}/${mediaType}`, lists);
            axios.request(config);
        },
        item: {
            save: (userName: string, listIdx: number, itemId: number | string) => {
                const config = this.post(`/user/${userName}/${mediaType}/${listIdx}/item`, { itemId });
                axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
            },
            delete: (userName: string, listIdx: number, itemId: number | string) => {
                const config = this.delete(`/user/${userName}/${mediaType}/${listIdx}/item`, { itemId });
                axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
            },
            swap: (userName: string, listIdx: number, itemIdx1: number, itemIdx2: number) => {
                const config = this.put(`/user/${userName}/${mediaType}/swap/item`, { listIdx, itemIdx1, itemIdx2 });
                axios.request(config);
            },
            move: (userName: string, itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
                const config = this.put(`/user/${userName}/${mediaType}/move/item`, { itemIdx, sourceListIdx, targetListIdx });
                axios.request(config);
            },
        },
        list: {
            add: (userName: string, title: string) => {
                const config = this.post(`/user/${userName}/${mediaType}/list`, { title });
                axios.request(config);
            },
            delete: (userName: string, listIdx: number) => {
                const config = this.delete(`/user/${userName}/${mediaType}/${listIdx}/list`);
                axios.request(config);
            },
            swap: (userName: string, listIdx1: number, listIdx2: number) => {
                const config = this.put(`/user/${userName}/${mediaType}/swap/list`, { listIdx1, listIdx2 });
                axios.request(config);
            },
            change: (userName: string, listIdx: number, title: string) => {
                const config = this.put(`/user/${userName}/${mediaType}/change/list`, { listIdx, title });
                axios.request(config);
            },
        },
    });

    public show = this.presenter(MediaType.SHOW);

    public movie = this.presenter(MediaType.MOVIE);
}

export default new WatchlistRequest();
