import { DetailById } from "../FilmResponse.types";

export interface SeriesDetailById extends DetailById {
    start_year: number;
    end_year: number;    
}