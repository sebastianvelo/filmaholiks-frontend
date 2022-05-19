import PageRoute from "client/routes/PageRoute";
import Page from "client/common/page/Page";
import HomePage, { HomePageProps } from "client/views/pages/home/HomePage";

export const HomePageBlueprint: Page<HomePageProps> = {
    route: PageRoute.HOME,
    component: HomePage,
    props: {

    }
};