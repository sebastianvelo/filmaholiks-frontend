import PageRoute from "client/routes/PageRoute";
import Page from "client/common/page/Page";
import ErrorPage, { ErrorPageProps } from "client/views/pages/error/ErrorPage";

export const ErrorPageBlueprint: Page<ErrorPageProps> = {
    route: PageRoute.ERROR,
    component: ErrorPage,
    props: {
        code: 404,
        message: 'This is not the web page you are looking for.'
    }
};
