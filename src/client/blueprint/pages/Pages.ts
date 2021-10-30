import { PersonDetailPageBlueprint, MovieDetailPageBlueprint, SeriesDetailPageBlueprint } from "./detail/DetailPageBlueprint";
import { ErrorPageBlueprint } from "./error/ErrorPageBlueprint";
import { ActorExplorePageBlueprint, MovieExplorePageBlueprint, SeriesExplorePageBlueprint } from "./explore/ExplorePageBlueprint"
import { HomePageBlueprint } from "./home/HomePageBlueprint"
import { PersonSearchResultPageBlueprint, MovieSearchResultPageBlueprint, TVShowSearchResultPageBlueprint } from "./search-result/SearchResultPageBlueprint";

const Pages = [
    HomePageBlueprint, 

    MovieExplorePageBlueprint, 
    SeriesExplorePageBlueprint, 
    ActorExplorePageBlueprint,

    MovieDetailPageBlueprint, 
    SeriesDetailPageBlueprint,
    PersonDetailPageBlueprint,

    MovieSearchResultPageBlueprint,
    TVShowSearchResultPageBlueprint,
    PersonSearchResultPageBlueprint,

    ErrorPageBlueprint,];

export default Pages;