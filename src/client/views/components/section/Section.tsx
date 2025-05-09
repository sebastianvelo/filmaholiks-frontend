import Headline from "@atom/headline/Headline";
import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode | React.ReactNode[];
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
    const className = Tailwind.builder()
        .add("space-y-8 w-full")
        .add("text-center lg:text-left")
        //.add("border-secondary-500 dark:border-primary-500 border-t-8 border-b-2")
        .add("bg-tertiary-900/10 dark:bg-tertiary-100/10 backdrop-blur-xl rounded-md")
        .build();

    return (
        <div className="space-y-6">
            {props.title && <Headline className={`text-2xl md:text-4xl text-center lg:text-left`}>{props.title}</Headline>}
            <section className={className}>
                {props.children}
            </section>
        </div>
    );
}

export default Section;