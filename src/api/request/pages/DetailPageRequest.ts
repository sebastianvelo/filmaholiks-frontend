import { DetailPageProps } from "client/pages/detail/DetailPage";
import APIRequest from "../APIRequest";

class DetailPageRequest extends APIRequest {
  protected collection: string = "/detail";

  public movieById = (id: string) => this.get<DetailPageProps>(`/movie/${id}`);

  public personById = (id: string) =>
    this.get<DetailPageProps>(`/person/${id}`);

  public showById = (id: string) => this.get<DetailPageProps>(`/show/${id}`);

  public seasonByShowIdAndNumber = (id: string, season: string) =>
    this.get<DetailPageProps>(`/show/${id}/s/${season}`);
}

export default new DetailPageRequest();
