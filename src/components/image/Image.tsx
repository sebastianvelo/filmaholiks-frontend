import { FunctionComponent } from "react";

interface ImageProps {
    src: string;
    alt: string;
    className: string;
}
 
const Image: FunctionComponent<ImageProps> = (props: ImageProps) => {
    return (<img alt={props.alt} className={props.className} src={props.src} />);
}
 
export default Image;