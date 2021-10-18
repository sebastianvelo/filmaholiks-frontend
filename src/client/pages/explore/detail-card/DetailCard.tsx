import useFetchTransformer, { FetchTransformer } from "client/hooks/useFetchTransformer";
import Card, { CardProps } from "components/card/Card";
import { FunctionComponent } from "react";

interface DetailCardProps {
    transformer: FetchTransformer<any, CardProps>;
}

const DetailCard: FunctionComponent<DetailCardProps> = (props: DetailCardProps) => {
    const [card, isLoading] = useFetchTransformer(props.transformer);
    return (
        <Card {...card} loading={isLoading} />
    );
}

export default DetailCard;