import IMDbController from "api/controller/IMDbController";
import DetailPage, { DetailPageProps } from "client/pages/detail/DetailPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.MOVIE_DETAIL,
    component: DetailPage,
    props: {
        getDetail: IMDbController.getMovieDetail,
    }
};

export const SeriesDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.SERIES_DETAIL,
    component: DetailPage,
    props: {
        getDetail: IMDbController.getSeriesDetail
    }
};


export const ActorDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.ACTOR_DETAIL,
    component: DetailPage,
    props: {
        getDetail: IMDbController.getActorDetail
    }
};