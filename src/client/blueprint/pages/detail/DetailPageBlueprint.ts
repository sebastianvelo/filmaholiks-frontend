import DetailPage, { DetailPageProps } from "client/pages/detail/DetailPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import { MovieDetailById } from "api/imdb/film/movie/MovieResponse.types";

export const MovieDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.MOVIE_DETAIL,
    component: DetailPage,
    props: {
        fetchTransformer: (id: string) => ({
            request: MovieRequest.detailById(id),
            transformer: (i: MovieDetailById) => ({
                image: {
                    alt: i.title,
                    src: i.image_url,
                },
                header: {
                    title: i.title,
                    subtitle: `(${i.year.toString()})`
                },
                info: {
                    data: []
                },
                actions: [],
                video: {
                    title: 'Trailer',
                    src: i.trailer
                }
            })
        })
    }
}