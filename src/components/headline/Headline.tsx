import Tailwind from "client/tailwind/Tailwind";
import { FunctionComponent } from "react";

interface HeadlineProps {
    children: string | React.ReactNode;
    className?: string;
}

const Headline: FunctionComponent<HeadlineProps> = (props: HeadlineProps) => {
    const className = Tailwind.builder()
        .add('font-bold text-primary')
        .add(props.className)
        .build();
    return (<h1 className={className}>{props.children}</h1>);
}

export default Headline;