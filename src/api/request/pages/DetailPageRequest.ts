import Collection from "api/common/Collection";
import BackendRequest from "../BackendRequest";

class DetailPageRequest extends BackendRequest {
  protected collection: string = Collection.DETAIL;

  public userById = (id: string) =>
    this.get(`/user/${id}`);

  public personById = (id: string) =>
    this.get(`/person/${id}`);

  public movieById = (id: string) =>
    this.get(`/movie/${id}`);

  public showById = (id: string) =>
    this.get(`/show/${id}`);

  public seasonByShowIdAndNumber = (id: string, season: string) =>
    this.get(`/show/${id}/s/${season}`);

  public episodeByShowIdAndSeason = (id: string, season: string, episode: string) =>
    this.get(`/show/${id}/s/${season}/e/${episode}`);
}

export default new DetailPageRequest();
