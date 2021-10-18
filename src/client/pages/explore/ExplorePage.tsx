import { FetchTransformer } from "client/hooks/useFetchTransformer";
import { CardProps } from "components/card/Card";
import { FunctionComponent } from "react";
import Section, { SectionProps } from "./section/Section";

export interface ExplorePageProps {
    sections: SectionProps[];
    fetchTransformer: (id: string) => FetchTransformer<any, CardProps>;
}

const ExplorePage: FunctionComponent<ExplorePageProps> = (props: ExplorePageProps) => {
    return (
        <div>
            {props.sections.map(section => <Section {...section} key={section.title} fetchTransformer={props.fetchTransformer} />)}
        </div>
    );
}

export default ExplorePage;