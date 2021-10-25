import { AxiosRequestConfig } from "axios";
import { useFetch } from "client/hooks/useFetch";
import { IdParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    getDetail: (id: string) => AxiosRequestConfig<DetailProps>;
}

const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    const { id }: IdParams = useParams();
    const detail = useFetch<{detail: DetailProps}>(props.getDetail(id));
    return (
        <>
            <section className={`w-full flex justify-center`}>
                <Detail {...detail?.data?.detail} loading={detail?.loading} />
            </section>
        </>
    );
}

export default DetailPage;