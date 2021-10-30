import { FunctionComponent } from "react";

export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}
 
const Image: FunctionComponent<ImageProps> = (props: ImageProps) => (<img alt={props.alt} className={props.className} src={props.src} />)
 
export default Image;