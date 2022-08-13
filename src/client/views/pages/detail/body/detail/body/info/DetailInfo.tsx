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
    <div className={`md:col-span-2 grid grid-cols-2 sm:grid-cols-4 w-full gap-y-4 place-content-between px-2`}>
        {props.data?.filter(info => info?.title).map((info) => (
            <Container className="border-l-4 border-secondary dark:border-primary flex flex-col justify-between" key={info?.title}>
                <Headline>{info?.title}</Headline>
                <Text className={`text-start`}>{info?.description}</Text>
            </Container>
        ))}
    </div>
)

export default DetailInfo;