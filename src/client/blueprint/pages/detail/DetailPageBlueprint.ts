import DetailPageRequest from "api/request/pages/DetailPageRequest";
import DetailPage, { DetailPageProps } from "client/pages/detail/DetailPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.MOVIE_DETAIL,
    component: DetailPage,
    props: {
        getDetail: DetailPageRequest.movieById
    }
};

export const SeriesDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.SERIES_DETAIL,
    component: DetailPage,
    props: {
        getDetail: DetailPageRequest.tvShowById
    }
};


export const PersonDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.ACTOR_DETAIL,
    component: DetailPage,
    props: {
        getDetail: DetailPageRequest.personById
    }
};