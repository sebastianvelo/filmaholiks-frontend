import Service from "api/service/Service";
import { CardProps } from "client/common/components/card/Card";
import SectionFetcher from "client/components/section/SectionFetcher";
import { QueryParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";

export interface SearchResultsPageProps {
    id: string;
    title: (query: string) => string;
    getIDs: (query: string) => Service<any, string[]>;
    getCard: (id: string) => Service<any, CardProps>;
}

const SearchResultPage: FunctionComponent<SearchResultsPageProps> = (props: SearchResultsPageProps) => {
    const { query }: QueryParams = useParams();

    return (
        <>
            <SectionFetcher {...props} title={props.title(query)} getIDs={props.getIDs(query)} />
        </>
    );
}

export default SearchResultPage;