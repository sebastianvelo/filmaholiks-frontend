import {
  EpisodeDetailPageBlueprint, MovieDetailPageBlueprint, PersonDetailPageBlueprint, SeasonDetailPageBlueprint, ShowDetailPageBlueprint
} from "./detail/DetailPageBlueprint";
import { ErrorPageBlueprint } from "./error/ErrorPageBlueprint";
import {
  ActorExplorePageBlueprint,
  MovieExplorePageBlueprint,
  ShowExplorePageBlueprint
} from "./explore/ExplorePageBlueprint";
import { HomePageBlueprint } from "./home/HomePageBlueprint";
import {
  MovieSearchResultPageBlueprint, PersonSearchResultPageBlueprint, ShowSearchResultPageBlueprint
} from "./search-result/SearchResultPageBlueprint";
import { WatchlistPageBlueprint } from "./watchlist/WatchlistPageBlueprint";

const Pages = [
  HomePageBlueprint,

  MovieExplorePageBlueprint,
  ShowExplorePageBlueprint,
  ActorExplorePageBlueprint,

  MovieDetailPageBlueprint,
  ShowDetailPageBlueprint,
  PersonDetailPageBlueprint,
  SeasonDetailPageBlueprint,
  EpisodeDetailPageBlueprint,

  MovieSearchResultPageBlueprint,
  ShowSearchResultPageBlueprint,
  PersonSearchResultPageBlueprint,


  WatchlistPageBlueprint,

  ErrorPageBlueprint
];

export default Pages;

