import ExplorePageRequest from "api/request/pages/ExplorePageRequest";
import PageRoute from "client/routes/PageRoute";
import Page from "client/common/page/Page";
import ExplorePage, { ExplorePageBlueprintProps } from "client/views/pages/explore/ExplorePage";

export const MovieExplorePageBlueprint: Page<ExplorePageBlueprintProps> = {
    route: PageRoute.MOVIE_EXPLORE,
    component: ExplorePage,
    props: {
        getPage: ExplorePageRequest.movie
    }
};

export const ShowExplorePageBlueprint: Page<ExplorePageBlueprintProps> = {
    route: PageRoute.SHOW_EXPLORE,
    component: ExplorePage,
    props: {
        getPage: ExplorePageRequest.show
    }
};

export const ActorExplorePageBlueprint: Page<ExplorePageBlueprintProps> = {
    route: PageRoute.PERSON_EXPLORE,
    component: ExplorePage,
    props: {
        getPage: ExplorePageRequest.person
    }
};