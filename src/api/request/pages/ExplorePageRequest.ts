import APIRequest from "../APIRequest";

class ExplorePageRequest extends APIRequest {
  protected collection: string = "/explore";

  public movie = () => this.get(`/movie`);

  public show = () => this.get(`/show`, { language: navigator.language });

  public person = () => this.get(`/person`);
}

export default new ExplorePageRequest();
