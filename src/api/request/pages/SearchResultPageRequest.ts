import { DetailPageProps } from "client/pages/detail/DetailPage";
import APIRequest from "../APIRequest";

class SearchResultPageRequest extends APIRequest {
  protected collection: string = "/search";

  public movie = (query: string) =>
    this.get<DetailPageProps>(`/movie/${query}`);

  public show = (query: string) => this.get<DetailPageProps>(`/show/${query}`);

  public person = (query: string) =>
    this.get<DetailPageProps>(`/person/${query}`);
}

export default new SearchResultPageRequest();
