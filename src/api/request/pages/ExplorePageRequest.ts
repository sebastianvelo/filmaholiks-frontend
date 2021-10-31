import { DetailPageProps } from "client/pages/detail/DetailPage";
import APIRequest from "../APIRequest";

class ExplorePageRequest extends APIRequest {
  protected collection: string = "/explore";

  public movie = () => this.get<DetailPageProps>(`/movie`);

  public show = () => this.get<DetailPageProps>(`/show`);

  public person = () => this.get<DetailPageProps>(`/person`);
}

export default new ExplorePageRequest();
