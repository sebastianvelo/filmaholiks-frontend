import ErrorPage, { ErrorPageProps } from "client/pages/error/ErrorPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const ErrorPageBlueprint: Page<ErrorPageProps> = {
    route: PageRoute.ERROR,
    component: ErrorPage,
    props: {
        code: 404,
        message: 'This is not the web page you are looking for.'
    }
};
