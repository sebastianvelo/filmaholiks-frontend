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
    <div className={`md:col-span-2 grid sm:grid-cols-3 2xl:grid-cols-4 place-content-start w-full`}>
        {props.data?.map((info, index) => (
            <Container key={index}>
                <Headline>{info?.title}</Headline>
                <Text className={`text-start`}>{info?.description}</Text>
            </Container>
        ))}
    </div>
)

export default DetailInfo;