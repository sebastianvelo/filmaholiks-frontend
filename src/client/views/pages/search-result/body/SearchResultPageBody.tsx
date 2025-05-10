import CardsSection, { CardsSectionProps } from "client/views/components/common/cards/CardsSection";
import { FunctionComponent } from "react";

export interface SearchResultPageBodyProps {
    results?: CardsSectionProps;
}

const SearchResultPageBody: FunctionComponent<SearchResultPageBodyProps> = (props: SearchResultPageBodyProps) => (
    <div className="2xl:px-24 py-6 md:py-24">
        <CardsSection {...(props?.results)} />
    </div>
);

export default SearchResultPageBody;