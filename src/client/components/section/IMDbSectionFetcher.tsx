import Service from "api/service/Service";
import { CardProps } from "client/common/components/card/Card";
import useService from "client/hooks/useService";
import { FunctionComponent } from "react";
import IMDbSection from "./IMDbSection";

export interface IMDbSectionFetcherProps {
    id: string;
    title: string;
    getIDs: Service<any, string[]>
    getCard: (id: string) => Service<any, CardProps>;
}

const IMDbSectionFetcher: FunctionComponent<IMDbSectionFetcherProps> = (props: IMDbSectionFetcherProps) => {
    const [ids, loading] = useService<any, string[]>(props.getIDs);
    return (<IMDbSection {...props} ids={ids} loading={loading} />);
}

export default IMDbSectionFetcher;