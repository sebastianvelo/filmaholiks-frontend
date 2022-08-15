import ImageModel from "model/atom/ImageModel";

interface CardHorizontalModel {
    title?: string;
    subtitle?: string;
    image?: ImageModel;
    path: string;
    tags?: string;
}

export default CardHorizontalModel;