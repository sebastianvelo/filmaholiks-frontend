import CardsSection, { CardsSectionProps } from "client/views/components/cards-section/CardsSection";
import { FunctionComponent } from "react";

export interface SearchResultPageBodyProps {
    results?: CardsSectionProps;
}

const SearchResultPageBody: FunctionComponent<SearchResultPageBodyProps> = (props: SearchResultPageBodyProps) => (
    <div className="2xl:px-20 3xl:px-28">
        <CardsSection {...(props?.results)} />
    </div>
);

export default SearchResultPageBody;