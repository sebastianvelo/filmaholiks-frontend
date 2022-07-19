import WatchlistPageRequest from "api/request/pages/WatchlistPageRequest";
import Page from "client/common/page/Page";
import PageRoute from "client/routes/PageRoute";
import WatchlistPage, { WatchlistPageBlueprintProps } from "client/views/pages/watchlist/WatchlistPage";

export const WatchlistLoggedinPageBlueprint: Page<WatchlistPageBlueprintProps> = {
    route: PageRoute.WATCH_LIST_LOGGED_IN,
    component: WatchlistPage,
    props: {
        getPage: WatchlistPageRequest.shows
    }
};

export const WatchlistPageBlueprint: Page<WatchlistPageBlueprintProps> = {
    route: PageRoute.WATCH_LIST_BY_USER,
    component: WatchlistPage,
    props: {
        getPage: WatchlistPageRequest.shows
    }
};