import Response from "api/common/Response";
import { IMDbEntity } from "api/model/IMDbModels.types";
import { AxiosRequestConfig } from "axios";
import { CardProps } from "client/common/components/card/Card";
import Carousel from "client/common/components/carousel/Carousel";
import Headline from "client/common/components/headline/Headline";
import Skeleton from "client/common/components/skeleton/Skeleton";
import CardFetcher from "client/components/card-fetcher/CardFetcher";
import { useFetch } from "client/hooks/useFetch";
import { FetchTransformer } from "client/hooks/useFetchTransformer";
import { FunctionComponent } from "react";

export interface SectionProps {
    id: string;
    title: string;
    request: AxiosRequestConfig;
    getCard?: (id: string) => FetchTransformer<any, CardProps>;
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
    const results: Response<IMDbEntity[]> | undefined = useFetch<IMDbEntity[]>(props.request);

    return (
        <section className={`px-4 pt-4`}>
            <Headline className={`text-3xl`}>{props.title}</Headline>
            <Carousel id={props.id}>
                <Skeleton loading={!results || !!results?.loading} className="h-96 w-screen">
                    {results?.data?.map(entity => <CardFetcher transformer={props.getCard!(entity.imdb_id)} key={entity.imdb_id} />)}
                </Skeleton>
            </Carousel>
        </section>
    );
}

export default Section;