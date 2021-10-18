import { useFetch } from "client/hooks/useFetch";
import { FetchTransformer } from "@client/hooks/useFetchTransformer";
import { IMDbEntity } from "api/model/IMDbModels.types";
import { AxiosRequestConfig } from "axios";
import { CardProps } from "components/card/Card";
import Carousel from "components/carousel/Carousel";
import Headline from "components/headline/Headline";
import { FunctionComponent } from "react";
import DetailCard from "../detail-card/DetailCard";

export interface SectionProps {
    title: string;
    request: AxiosRequestConfig;
    fetchTransformer?: (id: string) => FetchTransformer<any, CardProps>;
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
    const results = useFetch<IMDbEntity[]>(props.request);
    return (
        <section>
            <Headline>{props.title}</Headline>
            <Carousel id={props.title}>
                {results?.data?.map(entity => <DetailCard transformer={props.fetchTransformer!(entity.imdb_id)} />)}
            </Carousel>
        </section>
    );
}

export default Section;