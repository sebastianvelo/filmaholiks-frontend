import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import IMDbSectionFetcher from "client/components/section/IMDbSectionFetcher";
import { FunctionComponent } from "react";
import { IMDbSectionProps } from "../../components/section/IMDbSection";
export interface ExplorePageProps {
    searchbar: SearchBarProps;
    sections: IMDbSectionProps[];
}

const ExplorePage: FunctionComponent<ExplorePageProps> = (props: ExplorePageProps) => {
    return (
        <>
            <SearchBar {...props.searchbar} />
            {props.sections.map(section => <IMDbSectionFetcher {...section} key={section.title}  />)}
        </>
    );
}

export default ExplorePage;