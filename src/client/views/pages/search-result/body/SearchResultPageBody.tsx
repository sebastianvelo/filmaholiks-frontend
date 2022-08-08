import CardsSection, { CardsSectionProps } from "client/views/components/sections/cards-section/CardsSection";
import { FunctionComponent } from "react";

export interface SearchResultPageBodyProps {
    results?: CardsSectionProps;
}

const SearchResultPageBody: FunctionComponent<SearchResultPageBodyProps> = (props: SearchResultPageBodyProps) => (
    <div className="2xl:px-16 ">
        <CardsSection {...(props?.results)} />
    </div>
);

export default SearchResultPageBody;