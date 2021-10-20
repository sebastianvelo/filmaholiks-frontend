import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import SectionFetcher from "client/components/section/SectionFetcher";
import { FunctionComponent } from "react";
import { SectionProps } from "../../components/section/Section";
export interface ExplorePageProps {
    searchbar: SearchBarProps;
    sections: SectionProps[];
}

const ExplorePage: FunctionComponent<ExplorePageProps> = (props: ExplorePageProps) => {
    return (
        <>
            <SearchBar {...props.searchbar} />
            {props.sections.map(section => <SectionFetcher {...section} key={section.title}  />)}
        </>
    );
}

export default ExplorePage;