import ImageModel from "model/atom/ImageModel";

interface CardHorizontalModel {
    id: string | number;
    title?: string;
    subtitle?: string;
    image?: ImageModel;
    path: string;
    tags?: string;
}

export default CardHorizontalModel;