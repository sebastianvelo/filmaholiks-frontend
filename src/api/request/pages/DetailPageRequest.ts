import APIRequest from "../APIRequest";

class DetailPageRequest extends APIRequest {
  protected collection: string = "/detail";

  public userById = (id: string, userLoggedIn?: string | null) =>
    this.get(`/user/${id}`, { userLoggedIn });

  public personById = (id: string) =>
    this.get(`/person/${id}`);

  public movieById = (id: string, userLoggedIn?: string | null) =>
    this.get(`/movie/${id}`, { userLoggedIn });

  public showById = (id: string, userLoggedIn?: string | null) =>
    this.get(`/show/${id}`, { userLoggedIn });

  public seasonByShowIdAndNumber = (id: string, season: string) =>
    this.get(`/show/${id}/s/${season}`);

  public episodeByShowIdAndSeason = (id: string, season: string, episode: string) =>
    this.get(`/show/${id}/s/${season}/e/${episode}`);
}

export default new DetailPageRequest();
