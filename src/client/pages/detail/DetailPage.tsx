import useService, { Service } from "client/hooks/useService";
import { IdParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    getDetail: (id: string) => Service<any, DetailProps>;
}

const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    const { id }: IdParams = useParams();
    const [detail, isLoading] = useService(props.getDetail(id));

    return (
        <section className={`w-full flex justify-center`}>
            <Detail {...detail} loading={isLoading} />
        </section>
    );
}

export default DetailPage;