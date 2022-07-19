import { FunctionComponent } from "react";

export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

/* eslint-disable no-param-reassign */
const Image: FunctionComponent<ImageProps> = (props: ImageProps) => (<img alt={props.alt} className={props.className} src={props.src} onError={({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = `https://www.linguaa.com/assets/dummy.gif`;
}} />)

export default Image;