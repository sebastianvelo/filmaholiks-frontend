import { FetchTransformer } from "client/hooks/useFetchTransformer";
import { CardProps } from "client/common/components/card/Card";
import { FunctionComponent } from "react";
import Section, { SectionProps } from "./section/Section";
import SearchBar from "client/components/searchbar/SearchBar";
import PageRoute from "client/routes/PageRoute";

export interface ExplorePageProps {
    sections: SectionProps[];
    fetchTransformer: (id: string) => FetchTransformer<any, CardProps>;
}

const ExplorePage: FunctionComponent<ExplorePageProps> = (props: ExplorePageProps) => {
    return (
        <div>
            <SearchBar placeholder="Search..." path={PageRoute.MOVIE_SEARCH} />
            {props.sections.map(section => <Section {...section} key={section.title} fetchTransformer={props.fetchTransformer} />)}
        </div>
    );
}

export default ExplorePage;