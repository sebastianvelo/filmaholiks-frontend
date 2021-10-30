import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import Text from "client/common/components/text/Text";
import { FunctionComponent } from "react";

export interface DetailInfoProps {
    data: {
        title: string;
        description: string;
    }[];
}

const DetailInfo: FunctionComponent<DetailInfoProps> = (props: DetailInfoProps) => (
        <div className={`sm:space-x-2 divide-x-2 divide-primary-dark flex flex-col sm:flex-row`}>
            {props.data?.map((info, index) => (
                <Container key={index}>
                    <Headline>{info.title}</Headline>
                    <Text>{info.description}</Text>
                </Container>
            ))}
        </div>
    )

export default DetailInfo;