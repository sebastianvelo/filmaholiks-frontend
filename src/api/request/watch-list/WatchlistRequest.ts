import axios from "axios";
import { ListProps } from "client/views/components/watch-list/list/List";
import APIRequest from "../APIRequest";

class WatchlistRequest extends APIRequest {
    protected collection: string = "/watch-list";

    public shows = {
        search: (query: string) => this.get(`/search/show/${query}`),
        saveAll: (userName: string, lists: ListProps[]) => {
            const config = this.put(`/user/${userName}/show`, lists);
            axios.request(config);
        },
        item: {
            save: (userName: string, listIdx: number, itemId: number | string) => {
                const config = this.post(`/user/${userName}/show/${listIdx}/item`, { itemId });
                axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
            },
            delete: (userName: string, listIdx: number, itemId: number | string) => {
                const config = this.delete(`/user/${userName}/show/${listIdx}/item`, { itemId });
                axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
            },
            swap: (userName: string, listIdx: number, itemIdx1: number, itemIdx2: number) => {
                const config = this.put(`/user/${userName}/show/swap/item`, { listIdx, itemIdx1, itemIdx2 });
                axios.request(config);
            },
            move: (userName: string, itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
                const config = this.put(`/user/${userName}/show/move/item`, { itemIdx, sourceListIdx, targetListIdx });
                axios.request(config);
            },
        },
        list: {
            add: (userName: string, title: string) => {
                const config = this.post(`/user/${userName}/show/list`, { title });
                axios.request(config);
            },
            delete: (userName: string, listIdx: number) => {
                const config = this.delete(`/user/${userName}/show/${listIdx}/list`);
                axios.request(config);
            },
            swap: (userName: string, listIdx1: number, listIdx2: number) => {
                const config = this.put(`/user/${userName}/show/swap/list`, { listIdx1, listIdx2 });
                axios.request(config);
            },
        },
    };

    public movies = {
        search: (query: string) => this.get(`/search/movie/${query}`),
        saveAll: (userName: string, lists: ListProps[]) => {
            const config = this.put(`/user/${userName}/movie`, lists);
            axios.request(config);
        },
        item: {
            save: (userName: string, listIdx: number, itemId: number | string) => {
                const config = this.post(`/user/${userName}/movie/${listIdx}/item`, { itemId });
                axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
            },
            delete: (userName: string, listIdx: number, itemId: number | string) => {
                const config = this.delete(`/user/${userName}/movie/${listIdx}/item`, { itemId });
                axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
            },
            swap: (userName: string, listIdx: number, itemIdx1: number, itemIdx2: number) => {
                const config = this.put(`/user/${userName}/movie/swap/item`, { listIdx, itemIdx1, itemIdx2 });
                axios.request(config);
            },
            move: (userName: string, itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
                const config = this.put(`/user/${userName}/movie/move/item`, { itemIdx, sourceListIdx, targetListIdx });
                axios.request(config);
            },
        },
    }
}

export default new WatchlistRequest();
