export interface IdParams {
  id: string;
}
export interface SeasonParams {
  season: string;
}
export interface DetailSeasonPageParams extends IdParams, SeasonParams {}
export interface QueryParams {
  query: string;
}
