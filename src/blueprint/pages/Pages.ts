import {
  PersonDetailPageBlueprint,
  MovieDetailPageBlueprint,
  ShowDetailPageBlueprint,
  SeasonDetailPageBlueprint,
  EpisodeDetailPageBlueprint
} from "./detail/DetailPageBlueprint";
import { ErrorPageBlueprint } from "./error/ErrorPageBlueprint";
import {
  ActorExplorePageBlueprint,
  MovieExplorePageBlueprint,
  ShowExplorePageBlueprint
} from "./explore/ExplorePageBlueprint";
import { HomePageBlueprint } from "./home/HomePageBlueprint";
import {
  PersonSearchResultPageBlueprint,
  MovieSearchResultPageBlueprint,
  ShowSearchResultPageBlueprint
} from "./search-result/SearchResultPageBlueprint";

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

  ErrorPageBlueprint
];

export default Pages;

