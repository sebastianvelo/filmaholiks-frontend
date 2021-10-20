import IMDbController from "api/controller/IMDbController";
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
        getIDs: (query: string) => IMDbController.searchMoviesByTitle(query)
    }
};

export const SeriesSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.SERIES_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_series`,
        title: (query: string) => `Results of "${query}"`,
        getCard: IMDbController.getSeriesCard,        
        getIDs: (query: string) => IMDbController.searchSeriesByTitle(query)
    }
};

export const ActorSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.ACTOR_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_actor`,
        title: (query: string) => `Results of "${query}"`,
        getCard: IMDbController.getActorCard,        
        getIDs: (query: string) => IMDbController.searchActorsByName(query)
    }
};

