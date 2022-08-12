import CardsSection, { CardsSectionProps } from "client/views/components/sections/cards-section/CardsSection";
import { FunctionComponent } from "react";

export interface SearchResultPageBodyProps {
    results?: CardsSectionProps;
}

const SearchResultPageBody: FunctionComponent<SearchResultPageBodyProps> = (props: SearchResultPageBodyProps) => (
    <div className="2xl:px-24 2xl:py-4 ">
        <CardsSection {...(props?.results)} />
    </div>
);

export default SearchResultPageBody;