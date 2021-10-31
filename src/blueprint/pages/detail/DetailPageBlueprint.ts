import DetailPageRequest from "api/request/pages/DetailPageRequest";
import DetailWrapperPage, { DetailWrapperPageProps } from "client/wrapper/detail/DetailWrapperPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";
import DetailSeasonWrapperPage from "client/wrapper/detail/DetailSeasonWrapperPage";
import DetailEpisodeWrapperPage from "client/wrapper/detail/DetailEpisodeWrapperPage";

export const MovieDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.MOVIE_DETAIL,
    component: DetailWrapperPage,
    props: {
        getPage: DetailPageRequest.movieById,
    }
};

export const ShowDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.SHOW_DETAIL,
    component: DetailWrapperPage,
    props: {
        getPage: DetailPageRequest.showById
    }
};


export const PersonDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.PERSON_DETAIL,
    component: DetailWrapperPage,
    props: {
        getPage: DetailPageRequest.personById
    }
};

export const SeasonDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.SEASON_DETAIL,
    component: DetailSeasonWrapperPage,
    props: {
        getPage: DetailPageRequest.seasonByShowIdAndNumber
    }
}

export const EpisodeDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.EPISODE_DETAIL,
    component: DetailEpisodeWrapperPage,
    props: {
        getPage: DetailPageRequest.episodeByShowIdAndSeason
    }
}