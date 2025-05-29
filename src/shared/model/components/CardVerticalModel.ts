import ImageModel from "@model/atom/ImageModel";

interface CardVerticalModel {
    title?: string;
    subtitle?: string;
    image?: ImageModel;
    path?: string;
    rounded?: boolean;
}

export default CardVerticalModel;