import { SearchByName } from "api/imdb/actor/ActorResponse.types";
import useFetchTransformer, { FetchTransformer } from "client/hooks/useFetchTransformer";
import Card, { CardProps } from "components/card/Card";
import Carousel from "components/carousel/Carousel";
import Loading from "components/loading/Loading";
import { FunctionComponent } from "react";
export interface HomePageProps {
    fetchTransformer: FetchTransformer<SearchByName, CardProps[]>;
}

const HomePage: FunctionComponent<HomePageProps> = (props: HomePageProps) => {
    const [results, isLoading] = useFetchTransformer(props.fetchTransformer);
    return (
        <div>
            <Loading loading={isLoading}>
                <Carousel id="hola">
                    {results?.map(card => <Card {...card} />)}
                </Carousel>
            </Loading>
        </div>
    );
}

export default HomePage;