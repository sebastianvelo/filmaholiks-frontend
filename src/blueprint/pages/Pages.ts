import {
  EpisodeDetailPageBlueprint, MovieDetailPageBlueprint, PersonDetailPageBlueprint, SeasonDetailPageBlueprint, ShowDetailPageBlueprint, UserDetailPageBlueprint
} from "./detail/DetailPageBlueprint";
import { ErrorPageBlueprint } from "./error/ErrorPageBlueprint";
import {
  ActorExplorePageBlueprint,
  MovieExplorePageBlueprint,
  ShowExplorePageBlueprint
} from "./explore/ExplorePageBlueprint";
import { HomePageBlueprint } from "./home/HomePageBlueprint";
import { AuthPageBlueprint } from "./auth/AuthPageBlueprint";
import {
  MovieSearchResultPageBlueprint, PersonSearchResultPageBlueprint, ShowSearchResultPageBlueprint
} from "./search-result/SearchResultPageBlueprint";

const Pages = [
  HomePageBlueprint,
  AuthPageBlueprint,

  MovieExplorePageBlueprint,
  ShowExplorePageBlueprint,
  ActorExplorePageBlueprint,

  UserDetailPageBlueprint,
  MovieDetailPageBlueprint,
  ShowDetailPageBlueprint,
  PersonDetailPageBlueprint,
  SeasonDetailPageBlueprint,
  EpisodeDetailPageBlueprint,

  MovieSearchResultPageBlueprint,
  ShowSearchResultPageBlueprint,
  PersonSearchResultPageBlueprint,

  ErrorPageBlueprint,
];

export default Pages;

