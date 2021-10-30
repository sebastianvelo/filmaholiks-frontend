import { AxiosRequestConfig } from "axios";
import { useFetch } from "client/hooks/useFetch";
import { IdParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageBlueprintProps {
    getPage: (id: string) => AxiosRequestConfig<DetailPageProps>;
}

export interface DetailPageProps {
    detail: DetailProps
}

const DetailPage: FunctionComponent<DetailPageBlueprintProps> = (props: DetailPageBlueprintProps) => {
    const { id }: IdParams = useParams();
    const page = useFetch<DetailPageProps>(props.getPage(id));
    return (
        <>
            <section className={`w-full flex justify-center`}>
                <Detail {...page?.data?.detail} loading={page?.loading} />
            </section>
        </>
    );
}

export default DetailPage;