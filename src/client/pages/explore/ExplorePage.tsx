import { CardProps } from "client/common/components/card/Card";
import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import { FetchTransformer } from "client/hooks/useFetchTransformer";
import { FunctionComponent } from "react";
import Section, { SectionProps } from "../../components/section/Section";

export interface ExplorePageProps {
    searchbar: SearchBarProps;
    sections: SectionProps[];
    getCard: (id: string) => FetchTransformer<any, CardProps>;
}

const ExplorePage: FunctionComponent<ExplorePageProps> = (props: ExplorePageProps) => {
    return (
        <div>
            <SearchBar {...props.searchbar} />
            {props.sections.map(section => <Section {...section} key={section.title} getCard={props.getCard} />)}
        </div>
    );
}

export default ExplorePage;