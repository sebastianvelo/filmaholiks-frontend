import Headline from "client/common/components/headline/Headline";
import { FunctionComponent } from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode | React.ReactNode[];
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => (
    <section className={`px-4 py-4  space-y-4`} >
        {props.title && <Headline className={`text-3xl text-primary`}>{props.title}</Headline>}
        {props.children}
    </section>
)

export default Section;