import ActorRequest from "api/imdb/actor/ActorRequest"
import { SearchByName } from "api/imdb/actor/ActorResponse.types"
import ErrorPage, { ErrorPageProps } from "client/pages/error/ErrorPage"
import HomePage, { HomePageProps } from "client/pages/home/HomePage"
import PageRoute from "client/routes/PageRoute"
import Page from "client/util/page/Page"

const HomeData: Page<HomePageProps> = {
    route: PageRoute.HOME,
    component: HomePage,
    props: {
        fetchTransformer: {
            request: ActorRequest.searchByName('Smith'),
            transformer: (i: SearchByName) => i.map(actor => ({
                title: actor.name,
                subtitle: actor.imdb_id,
                image: {
                    src: 'https://picsum.photos/200/500',
                    alt: actor.name,
                }
            }))
        }
    }
}

const ErrorData: Page<ErrorPageProps> = {
    route: PageRoute.ERROR,
    component: ErrorPage,
    props: {
        code: 404,
        message: 'This is not the web page you are looking for.'
    }
}

const Pages = [HomeData, ErrorData];

export default Pages;