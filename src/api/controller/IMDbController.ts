import ActorRequest from "api/imdb/actor/ActorRequest";
import { ActorDetailById } from "api/imdb/actor/ActorResponse.types";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import { MovieDetailById } from "api/imdb/film/movie/MovieResponse.types";
import SeriesRequest from "api/imdb/film/series/SeriesRequest";
import { SeriesDetailById } from "api/imdb/film/series/SeriesResponse.types";
import { CardProps } from "client/common/components/card/Card";
import { FetchTransformer } from "client/hooks/useFetchTransformer";
import { DetailProps } from "client/pages/detail/detail/Detail";
import PageRoute from "client/routes/PageRoute";

class IMDbController {

    public static getMovieDetail = (id: string): FetchTransformer<MovieDetailById, DetailProps> => ({
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

    public static getSeriesDetail = (id: string): FetchTransformer<SeriesDetailById, DetailProps> => ({
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

    public static getActorDetail = (id: string): FetchTransformer<ActorDetailById, DetailProps> => ({
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

    public static getMovieCard = (id: string): FetchTransformer<MovieDetailById, CardProps> => ({
        request: MovieRequest.detailById(id),
        transformer: (movie: MovieDetailById) => ({
            title: movie.title,
            subtitle: movie.year.toString(),
            image: {
                src: movie.image_url,
                alt: movie.title
            },
            path: `${PageRoute.MOVIE_EXPLORE}/${id}`
        })
    })

    public static getSeriesCard = (id: string): FetchTransformer<SeriesDetailById, CardProps> => ({
        request: SeriesRequest.detailById(id),
        transformer: (serie: SeriesDetailById) => ({
            title: serie.title,
            subtitle: serie.start_year.toString(),
            image: {
                src: serie.image_url,
                alt: serie.title
            },
            path: `${PageRoute.SERIES_EXPLORE}/${id}`
        })
    })

    public static getActorCard = (id: string): FetchTransformer<ActorDetailById, CardProps> => ({
        request: ActorRequest.detailById(id),
        transformer: (actor: ActorDetailById) => ({
            title: actor.name,
            subtitle: actor.birth_date,
            image: {
                src: actor.image_url,
                alt: actor.name
            },
            path: `${PageRoute.ACTOR_EXPLORE}/${id}`
        })
    })

}

export default IMDbController;