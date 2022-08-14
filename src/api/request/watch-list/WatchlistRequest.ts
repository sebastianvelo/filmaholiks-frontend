import axios from "axios";
import { ListProps } from "client/views/components/watch-list/list/List";
import APIRequest from "../APIRequest";

class WatchlistRequest extends APIRequest {
    protected collection: string = "/watch-list";

    public shows = {
        search: (query: string) => this.get(`/search/show/${query}`),
        save: (userName: string, lists: ListProps[]) => {
            const config = this.put(`/user/${userName}/save`, lists);
            axios.request(config);
        },

    }

}

export default new WatchlistRequest();
