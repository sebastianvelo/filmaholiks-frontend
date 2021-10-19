import { MovieDetailPageBlueprint, SeriesDetailPageBlueprint } from "./detail/DetailPageBlueprint";
import { ErrorPageBlueprint } from "./error/ErrorPageBlueprint";
import { MovieExplorePageBlueprint, SeriesExplorePageBlueprint } from "./explore/ExplorePageBlueprint"
import { HomePageBlueprint } from "./home/HomePageBlueprint"

const Pages = [
    HomePageBlueprint, 
    MovieExplorePageBlueprint, 
    SeriesExplorePageBlueprint, 
    MovieDetailPageBlueprint, 
    SeriesDetailPageBlueprint,
    ErrorPageBlueprint,];

export default Pages;