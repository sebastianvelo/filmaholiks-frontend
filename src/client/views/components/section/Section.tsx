import Headline from "client/common/atom/headline/Headline";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode | React.ReactNode[];
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
    const className = Tailwind.builder()
        .add("px-4 space-y-8 w-full")
        .add("text-center lg:text-left")
        //.add("border-secondary dark:border-primary border-t-8 border-b-2")
        .add("bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-md")
        .build();

    return (
        <>
            {props.title && <Headline className={`text-3xl md:text-4xl`}>{props.title}</Headline>}
            <section className={className}>
                {props.children}
            </section>
        </>
    );
}

export default Section;