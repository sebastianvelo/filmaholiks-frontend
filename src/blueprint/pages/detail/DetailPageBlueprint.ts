import DetailPageRequest from "api/request/pages/DetailPageRequest";
import Page from "client/common/page/Page";
import PageRoute from "client/routes/PageRoute";
import DetailEpisodeWrapperPage, { DetailEpisodeWrapperPageProps } from "client/views/pages/detail/impl/DetailEpisodeWrapperPage";
import DetailSeasonWrapperPage, { DetailSeasonWrapperPageProps } from "client/views/pages/detail/impl/DetailSeasonWrapperPage";
import DetailWrapperPage, { DetailWrapperPageProps } from "client/views/pages/detail/impl/DetailWrapperPage";

export const UserDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.USER_DETAIL,
    component: DetailWrapperPage,
    props: {
        getPage: DetailPageRequest.userById,
    }
};

export const MovieDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.MOVIE_DETAIL,
    component: DetailWrapperPage,
    props: {
        getPage: DetailPageRequest.movieById,
    }
};

export const PersonDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.PERSON_DETAIL,
    component: DetailWrapperPage,
    props: {
        getPage: DetailPageRequest.personById
    }
};

export const ShowDetailPageBlueprint: Page<DetailWrapperPageProps> = {
    route: PageRoute.SHOW_DETAIL,
    component: DetailWrapperPage,
    props: {
        getPage: DetailPageRequest.showById
    }
};

export const SeasonDetailPageBlueprint: Page<DetailSeasonWrapperPageProps> = {
    route: PageRoute.SEASON_DETAIL,
    component: DetailSeasonWrapperPage,
    props: {
        getPage: DetailPageRequest.seasonByShowIdAndNumber
    }
}

export const EpisodeDetailPageBlueprint: Page<DetailEpisodeWrapperPageProps> = {
    route: PageRoute.EPISODE_DETAIL,
    component: DetailEpisodeWrapperPage,
    props: {
        getPage: DetailPageRequest.episodeByShowIdAndSeason
    }
}