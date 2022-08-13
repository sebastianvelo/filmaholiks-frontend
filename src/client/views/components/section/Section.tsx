import Headline from "client/common/components/headline/Headline";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode | React.ReactNode[];
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
    const className = Tailwind.builder()
        .add("px-4 py-4 space-y-4 w-full")
        .add("text-center lg:text-left")
        .add("border-secondary dark:border-primary border-t-8 border-b-2")
        .add("bg-white dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-70")
        .build();

    return (
        <section className={className} style={{ backdropFilter: "blur(20px)" }}>
            {props.title && <Headline className={`text-3xl md:text-5xl`}>{props.title}</Headline>}
            {props.children}
        </section>
    );
}

export default Section;