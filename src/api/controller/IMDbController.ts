import ActorRequest from "api/request/actor/ActorRequest";
import { ActorDetailById } from "api/model/actor/ActorModels.types";
import MovieRequest from "api/request/film/movie/MovieRequest";
import { MovieDetailById } from "api/model/film/movie/MovieModels.types";
import SeriesRequest from "api/request/film/series/SeriesRequest";
import { SeriesDetailById } from "api/model/film/series/SeriesModels.types";
import Service from "api/service/Service";
import { CardProps } from "client/common/components/card/Card";
import { DetailProps } from "client/pages/detail/detail/Detail";
import PageRoute from "client/routes/PageRoute";
import { IMDbEntity } from "api/model/IMDbModels.types";
import { AxiosRequestConfig } from "axios";

class IMDbController {

    public static getMovieDetail = (id: string): Service<MovieDetailById, DetailProps> => ({
        request: MovieRequest.detailById(id),
        getView: (movie: MovieDetailById) => ({
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

    public static getSeriesDetail = (id: string): Service<SeriesDetailById, DetailProps> => ({
        request: SeriesRequest.detailById(id),
        getView: (series: SeriesDetailById) => ({
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

    public static getActorDetail = (id: string): Service<ActorDetailById, DetailProps> => ({
        request: ActorRequest.detailById(id),
        getView: (actor: ActorDetailById) => ({
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

    public static getMovieCard = (id: string): Service<MovieDetailById, CardProps> => ({
        request: MovieRequest.detailById(id),
        getView: (movie: MovieDetailById) => ({
            title: movie.title,
            subtitle: movie.year.toString(),
            image: {
                src: movie.image_url,
                alt: movie.title
            },
            path: `${PageRoute.MOVIE_EXPLORE}/${id}`
        })
    })

    public static getSeriesCard = (id: string): Service<SeriesDetailById, CardProps> => ({
        request: SeriesRequest.detailById(id),
        getView: (serie: SeriesDetailById) => ({
            title: serie.title,
            subtitle: serie.start_year.toString(),
            image: {
                src: serie.image_url,
                alt: serie.title
            },
            path: `${PageRoute.SERIES_EXPLORE}/${id}`
        })
    })

    public static getActorCard = (id: string): Service<ActorDetailById, CardProps> => ({
        request: ActorRequest.detailById(id),
        getView: (actor: ActorDetailById) => ({
            title: actor.name,
            subtitle: actor.birth_date,
            image: {
                src: actor.image_url,
                alt: actor.name
            },
            path: `${PageRoute.ACTOR_EXPLORE}/${id}`
        })
    })

    private static getIDs = (req: AxiosRequestConfig): Service<IMDbEntity[], string[]> => ({
        request: req,
        getView: (entities: IMDbEntity[]) => entities.map(entity => entity.imdb_id)
    });

    public static getBestMovies = () => IMDbController.getIDs( MovieRequest.best({ page_size: 35 }));

    public static getBestSeries = () => IMDbController.getIDs( SeriesRequest.best({ page_size: 35 }));

    public static getPopularMovies = () => IMDbController.getIDs( MovieRequest.popular({ page_size: 35 }));

    public static getPopularSeries = () => IMDbController.getIDs( SeriesRequest.popular({ page_size: 35 }));

    public static getUpcomingMovies = () => IMDbController.getIDs( MovieRequest.upcoming({ page_size: 35 }));

    public static getUpcomingSeries = () => IMDbController.getIDs( SeriesRequest.upcoming({ page_size: 35 }));

    public static getBornToday = () => IMDbController.getIDs(ActorRequest.searchByName('Pacino'));

    public static searchMoviesByTitle = (q: string) => IMDbController.getIDs(MovieRequest.searchByTitle(q));

    public static searchSeriesByTitle = (q: string) => IMDbController.getIDs(SeriesRequest.searchByTitle(q));
    
    public static searchActorsByName = (q: string) => IMDbController.getIDs(ActorRequest.searchByName(q));
}

export default IMDbController;