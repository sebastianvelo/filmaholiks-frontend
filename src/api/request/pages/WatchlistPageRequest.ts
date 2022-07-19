import APIRequest from "../APIRequest";

class WatchlistPageRequest extends APIRequest {
    protected collection: string = "/watch-list";

    public shows = (user: string) => this.get(`/show/${user}`);

    public movies = (user: string) => this.get(`/movie/${user}`);

    public showsSuggestions = (query: string) => this.get(`/search/show/${query}`);
}

export default new WatchlistPageRequest();
