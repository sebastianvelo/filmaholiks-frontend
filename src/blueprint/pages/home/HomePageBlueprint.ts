import HomePage, { HomePageProps } from "client/pages/home/HomePage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const HomePageBlueprint: Page<HomePageProps> = {
    route: PageRoute.HOME,
    component: HomePage,
    props: {

    }
};