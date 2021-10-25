import { PersonDetailPageBlueprint, MovieDetailPageBlueprint, SeriesDetailPageBlueprint } from "./detail/DetailPageBlueprint";
import { ErrorPageBlueprint } from "./error/ErrorPageBlueprint";
import { ActorExplorePageBlueprint, MovieExplorePageBlueprint, SeriesExplorePageBlueprint } from "./explore/ExplorePageBlueprint"
import { HomePageBlueprint } from "./home/HomePageBlueprint"
import { ActorSearchResultPageBlueprint, MovieSearchResultPageBlueprint, SeriesSearchResultPageBlueprint } from "./search-result/SearchResultPageBlueprint";

const Pages = [
    HomePageBlueprint, 

    MovieExplorePageBlueprint, 
    SeriesExplorePageBlueprint, 
    ActorExplorePageBlueprint,

    MovieDetailPageBlueprint, 
    SeriesDetailPageBlueprint,
    PersonDetailPageBlueprint,

    MovieSearchResultPageBlueprint,
    SeriesSearchResultPageBlueprint,
    ActorSearchResultPageBlueprint,

    ErrorPageBlueprint,];

export default Pages;