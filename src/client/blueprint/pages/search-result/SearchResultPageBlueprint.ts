import SearchResultPageRequest from "api/request/pages/SearchResultPageRequest";
import SearchResultPage, { SearchResultsPageBlueprintProps } from "client/pages/search-result/SearchResultPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieSearchResultPageBlueprint: Page<SearchResultsPageBlueprintProps> = {
    route: PageRoute.MOVIE_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.movie
    }
};

export const TVShowSearchResultPageBlueprint: Page<SearchResultsPageBlueprintProps> = {
    route: PageRoute.TV_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.tv
    }
};

export const PersonSearchResultPageBlueprint: Page<SearchResultsPageBlueprintProps> = {
    route: PageRoute.PERSON_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.person
    }
};

