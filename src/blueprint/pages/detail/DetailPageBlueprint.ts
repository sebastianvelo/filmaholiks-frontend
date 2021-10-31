import DetailPageRequest from "api/request/pages/DetailPageRequest";
import DetailSeasonPage, { DetailSeasonPageBlueprintProps } from "client/pages/detail-season/DetailSeasonPage";
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

export const ShowDetailPageBlueprint: Page<DetailPageBlueprintProps> = {
    route: PageRoute.SHOW_DETAIL,
    component: DetailPage,
    props: {
        getPage: DetailPageRequest.showById
    }
};


export const PersonDetailPageBlueprint: Page<DetailPageBlueprintProps> = {
    route: PageRoute.PERSON_DETAIL,
    component: DetailPage,
    props: {
        getPage: DetailPageRequest.personById
    }
};

export const SeasonDetailPageBlueprint: Page<DetailSeasonPageBlueprintProps> = {
    route: PageRoute.SEASON_DETAIL,
    component: DetailSeasonPage,
    props: {
        getPage: DetailPageRequest.seasonByShowIdAndNumber
    }
}