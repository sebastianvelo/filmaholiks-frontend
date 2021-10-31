import ExplorePageRequest from "api/request/pages/ExplorePageRequest";
import ExplorePage, { ExplorePageBlueprintProps } from "client/pages/explore/ExplorePage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

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