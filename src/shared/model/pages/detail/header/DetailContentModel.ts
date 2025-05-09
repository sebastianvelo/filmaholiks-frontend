import VideoModel from "@model/atom/VideoModel";

export interface DetailContentHeaderModel {
    title: string;
    subtitle?: string;
}

export interface DetailContentDescriptionModel {
    title: string;
    description: string;
}

export interface DetailContentVideoModel extends VideoModel { }

export interface DetailContentInfoModel {
    data: {
        title: string;
        description: string;
    }[];
    theresVideo?: boolean;
}

export interface DetailContentModel {
    header?: DetailContentHeaderModel;
    description?: DetailContentDescriptionModel;
    video?: DetailContentVideoModel;
    info?: DetailContentInfoModel;
}


