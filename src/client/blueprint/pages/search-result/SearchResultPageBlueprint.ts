import IMDbController from "api/controller/IMDbController";
import ActorRequest from "api/imdb/actor/ActorRequest";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import SeriesRequest from "api/imdb/film/series/SeriesRequest";
import SearchResultPage, { SearchResultsPageProps } from "client/pages/search-result/SearchResultPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.MOVIE_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_movie`,
        title: (query: string) => `Results of "${query}"`,
        getCard: IMDbController.getMovieCard,
        request: (query: string) => MovieRequest.searchByTitle(query)
    }
};

export const SeriesSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.SERIES_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_series`,
        title: (query: string) => `Results of "${query}"`,
        getCard: IMDbController.getSeriesCard,
        request: (query: string) => SeriesRequest.searchByTitle(query)
    }
};

export const ActorSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.ACTOR_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_actor`,
        title: (query: string) => `Results of "${query}"`,
        getCard: IMDbController.getActorCard,
        request: (query: string) => ActorRequest.searchByName(query)
    }
};

