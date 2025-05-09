import PageRoute from "shared/routes/PageRoute";
import Page from "blueprint/types/Page";
import ErrorPage, { ErrorPageProps } from "client/views/pages/error/ErrorPage";

export const ErrorPageBlueprint: Page<ErrorPageProps> = {
    route: PageRoute.ERROR,
    component: ErrorPage,
    props: {
        code: 404,
        message: 'This is not the web page you are looking for.'
    }
};
