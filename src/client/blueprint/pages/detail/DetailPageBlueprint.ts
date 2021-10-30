import DetailPageRequest from "api/request/pages/DetailPageRequest";
import DetailPage, { DetailPageBlueprintProps } from "client/pages/detail/DetailPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieDetailPageBlueprint: Page<DetailPageBlueprintProps> = {
    route: PageRoute.MOVIE_DETAIL,
    component: DetailPage,
    props: {
        getPage: DetailPageRequest.movieById
    }
};

export const SeriesDetailPageBlueprint: Page<DetailPageBlueprintProps> = {
    route: PageRoute.TV_DETAIL,
    component: DetailPage,
    props: {
        getPage: DetailPageRequest.tvShowById
    }
};


export const PersonDetailPageBlueprint: Page<DetailPageBlueprintProps> = {
    route: PageRoute.PERSON_DETAIL,
    component: DetailPage,
    props: {
        getPage: DetailPageRequest.personById
    }
};