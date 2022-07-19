export interface IdParams {
  id: string;
}
export interface SeasonParams {
  season: string;
}

export interface EpisodeParams {
  episode: string;
}

export interface UserParams {
  user: string;
}

export interface DetailSeasonPageParams extends IdParams, SeasonParams { }
export interface DetailEpisodePageParams extends DetailSeasonPageParams, EpisodeParams { }
export interface QueryParams {
  query: string;
}
