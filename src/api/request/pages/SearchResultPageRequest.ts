import APIRequest from "../APIRequest";

class SearchResultPageRequest extends APIRequest {
  protected collection: string = "/search";

  public movie = (query: string) =>
    this.get(`/movie/${query}`);

  public show = (query: string) => this.get(`/show/${query}`);

  public person = (query: string) =>
    this.get(`/person/${query}`);
}

export default new SearchResultPageRequest();
