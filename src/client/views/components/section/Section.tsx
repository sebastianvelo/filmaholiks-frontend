import Headline from "client/common/components/headline/Headline";
import { FunctionComponent } from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode | React.ReactNode[];
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => (
    <section className={`px-4 py-4 space-y-4 bg-gradient-to-t from-secondary to-secondary-dark w-full`} >
        {props.title && <Headline className={`text-5xl`}>{props.title}</Headline>}
        {props.children}
    </section>
)

export default Section;