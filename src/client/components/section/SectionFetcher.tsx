import Service from "api/service/Service";
import { CardProps } from "client/common/components/card/Card";
import useService from "client/hooks/useService";
import { FunctionComponent } from "react";
import Section from "./Section";

export interface SectionFetcherProps {
    id: string;
    title: string;
    getIDs: Service<any, string[]>
    getCard: (id: string) => Service<any, CardProps>;
}

const SectionFetcher: FunctionComponent<SectionFetcherProps> = (props: SectionFetcherProps) => {
    const [IDs, isLoading] = useService<any, string[]>(props.getIDs);
    return (<Section {...props} ids={IDs} loading={isLoading} />);
}

export default SectionFetcher;