import Container from "components/container/Container";
import Headline from "components/headline/Headline";
import Text from "components/text/Text";
import { FunctionComponent } from "react";

export interface DetailInfoProps {
    data: {
        title: string;
        description: string;
    }[];
}

const DetailInfo: FunctionComponent<DetailInfoProps> = (props: DetailInfoProps) => {
    return (
        <div className={`lg:space-y-4 divide-y divide-primary-light`}>
            {props.data.map((info, index) => (
                <Container key={index}>
                    <Headline>{info.title}</Headline>
                    <Text>{info.description}</Text>
                </Container>
            ))}
        </div>
    );
}

export default DetailInfo;