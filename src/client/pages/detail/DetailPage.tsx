import useFetchTransformer, { FetchTransformer } from "client/hooks/useFetchTransformer";
import { IdParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    fetchTransformer: (id: string) => FetchTransformer<any, DetailProps>;
}

const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    const { id }: IdParams = useParams();
    const [detail, isLoading] = useFetchTransformer(props.fetchTransformer(id));

    return (
        <section className={`w-full flex justify-center`}>
            <Detail {...detail} loading={isLoading} />
        </section>
    );
}

export default DetailPage;