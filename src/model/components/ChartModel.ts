import ImageModel from "model/atom/ImageModel";

export interface ChartBodyCellModel {
    rating: number;
    value: string;
    href: string;
    title: string;
    image: ImageModel;
    isTopHalf?: boolean;
    isLeftHalf?: boolean;
}

export interface ChartBodyModel {
    episode: string[];
    ratings: ChartBodyCellModel[][];
};

export interface ChartHeaderModel {
    header: string[];
}

interface ChartModel extends ChartBodyModel, ChartHeaderModel {
    body: ChartBodyModel;
}

export default ChartModel;
