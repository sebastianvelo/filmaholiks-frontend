import useService, { Service } from "client/hooks/useService";
import Card, { CardProps } from "client/common/components/card/Card";
import { FunctionComponent } from "react";

interface CardFetcherProps {
    transformer: Service<any, CardProps>;
}

const CardFetcher: FunctionComponent<CardFetcherProps> = (props: CardFetcherProps) => {
    const [card, isLoading] = useService(props.transformer);
    return (
        <Card {...card} loading={isLoading} />
    );
}

export default CardFetcher;