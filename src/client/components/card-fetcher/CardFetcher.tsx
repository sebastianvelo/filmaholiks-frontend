import useFetchTransformer, { FetchTransformer } from "client/hooks/useFetchTransformer";
import Card, { CardProps } from "client/common/components/card/Card";
import { FunctionComponent } from "react";

interface CardFetcherProps {
    transformer: FetchTransformer<any, CardProps>;
}

const CardFetcher: FunctionComponent<CardFetcherProps> = (props: CardFetcherProps) => {
    const [card, isLoading] = useFetchTransformer(props.transformer);
    return (
        <Card {...card} loading={isLoading} />
    );
}

export default CardFetcher;