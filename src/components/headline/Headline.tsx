import { FunctionComponent } from "react";

interface HeadlineProps {
    children: string | React.ReactNode;
    className?: string;
}
 
const Headline: FunctionComponent<HeadlineProps> = (props: HeadlineProps) => {
    return (<h1 className={`text-xl font-bold text-primary text-justify ${props.className ?? ''}`}>{props.children}</h1>); //TODO Refactor with props like the others components
}
 
export default Headline;