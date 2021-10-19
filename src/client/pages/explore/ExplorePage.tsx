import Service from "api/service/Service";
import { CardProps } from "client/common/components/card/Card";
import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import Section, { SectionProps } from "../../components/section/Section";

export interface ExplorePageProps {
    searchbar: SearchBarProps;
    sections: SectionProps[];
    getCard: (id: string) => Service<any, CardProps>;
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