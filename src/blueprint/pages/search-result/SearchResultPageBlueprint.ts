import SearchResultPageRequest from "api/request/pages/SearchResultPageRequest";
import SearchResultPage, { SearchResultPageBlueprintProps } from "client/pages/search-result/SearchResultPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieSearchResultPageBlueprint: Page<SearchResultPageBlueprintProps> = {
    route: PageRoute.MOVIE_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.movie
    }
};

export const TVShowSearchResultPageBlueprint: Page<SearchResultPageBlueprintProps> = {
    route: PageRoute.TV_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.tv
    }
};

export const PersonSearchResultPageBlueprint: Page<SearchResultPageBlueprintProps> = {
    route: PageRoute.PERSON_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.person
    }
};

