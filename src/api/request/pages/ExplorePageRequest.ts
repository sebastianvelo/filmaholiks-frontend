import Collection from "api/common/Collection";
import BackendRequest from "../BackendRequest";

class ExplorePageRequest extends BackendRequest {
  protected collection: string = Collection.EXPLORE;

  public movie = () => this.get(`/movie`);

  public show = () => this.get(`/show`, { language: navigator.language });

  public person = () => this.get(`/person`);
}

export default new ExplorePageRequest();
