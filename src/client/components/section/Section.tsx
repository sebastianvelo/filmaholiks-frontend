import Carousel from "client/common/components/carousel/Carousel";
import Headline from "client/common/components/headline/Headline";
import Skeleton from "client/common/components/skeleton/Skeleton";
import CardFetcher from "client/components/card-fetcher/CardFetcher";
import { FunctionComponent } from "react";
import { SectionFetcherProps } from "./SectionFetcher";

export interface SectionProps extends SectionFetcherProps {
    ids?: string[] | null;
    loading?: boolean;
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
    return (
        <section className={`px-4 pt-4`}>
            <Headline className={`text-3xl`}>{props.title}</Headline>
            <Carousel id={props.id}>
                <Skeleton loading={!props.ids || props.loading} className="h-96 w-screen">
                    {props.ids?.map(id => <CardFetcher getCard={props.getCard(id)} key={id} />)}
                </Skeleton>
            </Carousel>
        </section>
    );
}

export default Section;