import useService  from "client/hooks/useService";
import Card, { CardProps } from "client/common/components/card/Card";
import { FunctionComponent } from "react";
import Service from "api/service/Service";

interface CardFetcherProps {
    getCard: Service<any, CardProps>;
}

const CardFetcher: FunctionComponent<CardFetcherProps> = (props: CardFetcherProps) => {
    const [card, isLoading] = useService(props.getCard);
    return <Card {...card} loading={isLoading} />;
}

export default CardFetcher;