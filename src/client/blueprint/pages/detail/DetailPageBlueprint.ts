import DetailPage, { DetailPageProps } from "client/pages/detail/DetailPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import { MovieDetailById } from "api/imdb/film/movie/MovieResponse.types";
import SeriesRequest from "api/imdb/film/series/SeriesRequest";
import { SeriesDetailById } from "api/imdb/film/series/SeriesResponse.types";

export const MovieDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.MOVIE_DETAIL,
    component: DetailPage,
    props: {
        fetchTransformer: (id: string) => ({
            request: MovieRequest.detailById(id),
            transformer: (movie: MovieDetailById) => ({
                image: {
                    alt: movie.title,
                    src: movie.image_url,
                },
                header: {
                    title: `${movie.title} (${movie.year})`,
                    subtitle: `${movie.rating}/10`,
                },
                description: movie.description,
                info: {
                    data: [
                        {
                            title: 'Duration',
                            description: `${movie.movie_length}m`,
                        },
                        {
                            title: 'Content rating',
                            description: `${movie.content_rating}`,
                        },
                    ],
                },
                actions: [],
                video: {
                    title: 'Trailer',
                    src: movie.trailer,
                }
            })
        })
    }
};

export const SeriesDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.SERIES_DETAIL,
    component: DetailPage,
    props: {
        fetchTransformer: (id: string) => ({
            request: SeriesRequest.detailById(id),
            transformer: (series: SeriesDetailById) => ({
                image: {
                    alt: series.title,
                    src: series.image_url,
                },
                header: {
                    title: series.title,
                    subtitle: `(${series.start_year?.toString()})`,
                },
                description: series.description,
                info: {
                    data: [
                        {
                            title: 'Duration',
                            description: `${series.movie_length}m`,
                        },
                        {
                            title: 'Content rating',
                            description: `${series.content_rating}`,
                        },
                    ],
                },
                actions: [],
                video: {
                    title: 'Trailer',
                    src: series.trailer,
                }
            })
        })
    }
};