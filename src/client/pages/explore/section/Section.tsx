import { useFetch } from "client/hooks/useFetch";
import { FetchTransformer } from "client/hooks/useFetchTransformer";
import { IMDbEntity } from "api/model/IMDbModels.types";
import { AxiosRequestConfig } from "axios";
import { CardProps } from "components/card/Card";
import Carousel from "components/carousel/Carousel";
import Headline from "components/headline/Headline";
import { FunctionComponent } from "react";
import DetailCard from "../detail-card/DetailCard";
import Skeleton from "components/skeleton/Skeleton";

export interface SectionProps {
    title: string;
    request: AxiosRequestConfig;
    fetchTransformer?: (id: string) => FetchTransformer<any, CardProps>;
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
    const results = useFetch<IMDbEntity[]>(props.request);
    return (
        <section className={`px-4 py-2`}>
            <Headline className={`text-3xl`}>{props.title}</Headline>
            <Carousel id={props.title}>
                <Skeleton loading={!results || !!results?.loading} className="h-96 w-screen">
                    {results?.data?.map(entity => <DetailCard transformer={props.fetchTransformer!(entity.imdb_id)} key={entity.imdb_id} />)}
                </Skeleton>
            </Carousel>
        </section>
    );
}

export default Section;