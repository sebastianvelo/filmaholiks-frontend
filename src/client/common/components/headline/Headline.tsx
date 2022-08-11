import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

interface HeadlineProps {
    children: string | React.ReactNode;
    className?: string;
    revert?: boolean;
}

const Headline: FunctionComponent<HeadlineProps> = (props: HeadlineProps) => {
    const className = Tailwind.builder()
        .add('font-bold')
        .add(props.className)
        .addIf("text-secondary dark:text-primary", !props.revert)
        .addIf(`text-xl`, !props.className)
        .build();
    return (<h1 className={className}>{props.children}</h1>);
}

export default Headline;