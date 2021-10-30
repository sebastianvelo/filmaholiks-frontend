import { DetailPageProps } from "client/pages/detail/DetailPage";
import APIRequest from "../APIRequest";

class SearchResultPageRequest extends APIRequest {
    protected collection: string = '/search';

    public movie = (query: string) => this.get<DetailPageProps>(`/movie/${query}`);
    public tv = (query: string) => this.get<DetailPageProps>(`/tv/${query}`);
    public person = (query: string) => this.get<DetailPageProps>(`/person/${query}`);
}

export default new SearchResultPageRequest();