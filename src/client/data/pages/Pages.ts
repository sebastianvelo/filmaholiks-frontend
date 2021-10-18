import MovieRequest from "api/imdb/film/movie/MovieRequest"
import { MovieDetailById } from "api/imdb/film/movie/MovieResponse.types"
import ErrorPage, { ErrorPageProps } from "client/pages/error/ErrorPage"
import ExplorePage, { ExplorePageProps } from "client/pages/explore/ExplorePage"
import HomePage, { HomePageProps } from "client/pages/home/HomePage"
import PageRoute from "client/routes/PageRoute"
import Page from "client/util/page/Page"

const HomeData: Page<HomePageProps> = {
    route: PageRoute.HOME,
    component: HomePage,
    props: {

    }
};

const MovieExploreData: Page<ExplorePageProps> = {
    route: PageRoute.MOVIE_EXPLORE,
    component: ExplorePage,
    props: {
        fetchTransformer: (id: string) => ({
            request: MovieRequest.detailById(id),
            transformer: (i: MovieDetailById) => ({
                title: i.title,
                subtitle: i.year.toString(),
                image: {
                    src: i.image_url,
                    alt: i.title
                }
            })
        }),
        sections: [
            {
                title: 'Best movies',
                request: MovieRequest.best({ page_size: 35 }),
            },
            {
                title: 'Popular movies',
                request: MovieRequest.popular({ page_size: 35 }),
            },
            {
                title: 'Upcoming movies',
                request: MovieRequest.upcoming({ page_size: 35 }),
            },
        ]
    }
};

const ErrorData: Page<ErrorPageProps> = {
    route: PageRoute.ERROR,
    component: ErrorPage,
    props: {
        code: 404,
        message: 'This is not the web page you are looking for.'
    }
};

const Pages = [HomeData, MovieExploreData, ErrorData];

export default Pages;