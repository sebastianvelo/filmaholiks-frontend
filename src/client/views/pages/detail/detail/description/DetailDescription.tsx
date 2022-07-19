import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import Text from "client/common/components/text/Text";
import { FunctionComponent } from "react";

export interface DetailDescriptionProps {
    title: string;
    description: string;
}

const DetailDescription: FunctionComponent<DetailDescriptionProps> = (props: DetailDescriptionProps) => (
    <Container>
        <Headline>{props?.title}</Headline>
        <Text>{props?.description}</Text>
    </Container>
)

export default DetailDescription;