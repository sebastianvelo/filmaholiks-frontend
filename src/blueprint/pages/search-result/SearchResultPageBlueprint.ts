import SearchResultPageRequest from "api/request/pages/SearchResultPageRequest";
import PageRoute from "shared/routes/PageRoute";
import Page from "client/common/page/Page";
import SearchResultPage, { SearchResultPageBlueprintProps } from "client/views/pages/search-result/SearchResultPage";

export const MovieSearchResultPageBlueprint: Page<SearchResultPageBlueprintProps> = {
    route: PageRoute.MOVIE_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.movie
    }
};

export const ShowSearchResultPageBlueprint: Page<SearchResultPageBlueprintProps> = {
    route: PageRoute.SHOW_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.show
    }
};

export const PersonSearchResultPageBlueprint: Page<SearchResultPageBlueprintProps> = {
    route: PageRoute.PERSON_SEARCH,
    component: SearchResultPage,
    props: {
        getPage: SearchResultPageRequest.person
    }
};

