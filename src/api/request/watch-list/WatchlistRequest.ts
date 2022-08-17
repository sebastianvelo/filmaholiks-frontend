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
        saveItem: (userName: string, listIdx: number, itemId: number | string) => {
            const config = this.post(`/user/${userName}/show/${listIdx}`, { itemId });
            axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
        },
        deleteItem: (userName: string, listIdx: number, itemId: number | string) => {
            const config = this.delete(`/user/${userName}/show/${listIdx}`, { itemId });
            axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
        },
        swapItems: (userName: string, listIdx: number, itemAIdx: number, itemBIdx: number) => {
            const config = this.put(`/user/${userName}/show/swap/item`, { listIdx, itemAIdx, itemBIdx });
            axios.request(config);
        },
        moveItem: (userName: string, itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
            const config = this.put(`/user/${userName}/show/move/item`, { itemIdx, sourceListIdx, targetListIdx });
            axios.request(config);
        },
    };

    public movies = {
        search: (query: string) => this.get(`/search/movie/${query}`),
        saveAll: (userName: string, lists: ListProps[]) => {
            const config = this.put(`/user/${userName}/movie`, lists);
            axios.request(config);
        },
        saveItem: (userName: string, listIdx: number, itemId: number | string) => {
            const config = this.post(`/user/${userName}/movie/${listIdx}`, { itemId });
            axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
        },
        deleteItem: (userName: string, listIdx: number, itemId: number | string) => {
            const config = this.delete(`/user/${userName}/movie/${listIdx}`, { itemId });
            axios.request(config).then(res => console.log(res)).catch(err => console.log(err));
        },
        swapItems: (userName: string, listIdx: number, itemAIdx: number, itemBIdx: number) => {
            const config = this.put(`/user/${userName}/movie/swap/item`, { listIdx, itemAIdx, itemBIdx });
            axios.request(config);
        },
        moveItem: (userName: string, itemIdx: number, sourceListIdx: number, targetListIdx: number) => {
            const config = this.put(`/user/${userName}/movie/move/item`, { itemIdx, sourceListIdx, targetListIdx });
            axios.request(config);
        },
    }
}

export default new WatchlistRequest();
