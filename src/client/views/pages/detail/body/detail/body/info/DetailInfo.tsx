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
    <div className={`md:col-span-2 grid grid-cols-2 sm:grid-cols-3 w-full gap-y-4 place-content-between px-2 md:px-0 py-4`}>
        {props.data?.filter(info => info?.title).map((info) => (
            <Container className="border-l-2 border-primary-dark flex flex-col justify-center" key={info?.title}>
                <Headline>{info?.title}</Headline>
                <Text className={`text-start`}>{info?.description}</Text>
            </Container>
        ))}
    </div>
)

export default DetailInfo;