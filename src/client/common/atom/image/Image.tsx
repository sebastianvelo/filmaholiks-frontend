import ImageModel from "@model/atom/ImageModel";

export interface ImageProps extends ImageModel {
    className?: string;
}

/* eslint-disable no-param-reassign */
const Image: React.FC<ImageProps> = (props: ImageProps) => (<img alt={props.alt} className={props.className} src={props.src} onError={({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = `https://www.linguaa.com/assets/dummy.gif`;
}} />)

export default Image;