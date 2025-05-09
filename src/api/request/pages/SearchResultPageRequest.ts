import Collection from "api/common/Collection";
import BackendRequest from "../BackendRequest";

class SearchResultPageRequest extends BackendRequest {
  protected collection: string = Collection.SEARCH;

  public movie = (query: string) =>
    this.get(`/movie/${query}`);

  public show = (query: string) => this.get(`/show/${query}`);

  public person = (query: string) =>
    this.get(`/person/${query}`);
}

export default new SearchResultPageRequest();
