import DetailPage, { DetailPageProps } from "client/pages/detail/DetailPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import { MovieDetailById } from "api/imdb/film/movie/MovieResponse.types";
import SeriesRequest from "api/imdb/film/series/SeriesRequest";
import { SeriesDetailById } from "api/imdb/film/series/SeriesResponse.types";
import ActorRequest from "api/imdb/actor/ActorRequest";
import { ActorDetailById } from "api/imdb/actor/ActorResponse.types";

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
                description: {
                    title: 'Description',
                    value: movie.description,
                },
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
                    title: `${series.title} (${series.start_year})`,
                    subtitle: `${series.rating}/10`,
                },
                description: {
                    title: 'Description',
                    value: series.description,
                },
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


export const ActorDetailPageBlueprint: Page<DetailPageProps> = {
    route: PageRoute.ACTOR_DETAIL,
    component: DetailPage,
    props: {
        fetchTransformer: (id: string) => ({
            request: ActorRequest.detailById(id),
            transformer: (actor: ActorDetailById) => ({
                image: {
                    alt: actor.name,
                    src: actor.image_url,
                },
                header: {
                    title: actor.name,
                },
                description: {
                    title: 'Bio',
                    value: actor.partial_bio,
                },
                info: {
                    data: [
                        {
                            title: 'Birth date',
                            description: `${actor.birth_date}`,
                        },
                        {
                            title: 'Birth place',
                            description: `${actor.birth_place}`,
                        },
                        {
                            title: 'Star sign',
                            description: actor.star_sign,
                        },
                    ],
                },
                actions: [],
            })
        })
    }
};