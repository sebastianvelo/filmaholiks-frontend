import CardVerticalModel from "../CardVerticalModel";
import ChartModel from "../ChartModel";
import { WatchlistModel } from "../WatchlistModel";

interface Section {
    title?: string;
}

export interface CardsSectionModel extends Section {
    id?: string;
    cards?: CardVerticalModel[];
    isGrid?: boolean;
    horizontal?: boolean;
}

export interface ChartSectionModel extends Section {
    chart: ChartModel;
}

export interface WatchlistTabModel extends WatchlistModel {
    title: string;
}
