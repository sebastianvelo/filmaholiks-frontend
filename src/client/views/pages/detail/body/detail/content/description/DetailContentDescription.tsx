import Container from "client/common/components/container/Container";
import Headline from "client/common/atom/headline/Headline";
import Text from "client/common/atom/text/Text";
import { FunctionComponent } from "react";

export interface DetailContentDescriptionProps {
    title: string;
    description: string;
}

const DetailContentDescription: FunctionComponent<DetailContentDescriptionProps> = (props: DetailContentDescriptionProps) => (
    <Container>
        <Headline>{props?.title}</Headline>
        <Text>{props?.description}</Text>
    </Container>
)

export default DetailContentDescription;