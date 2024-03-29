import Container from "client/common/components/container/Container";
import Headline from "client/common/atom/headline/Headline";
import Text from "client/common/atom/text/Text";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface DetailContentInfoProps {
    data: {
        title: string;
        description: string;
    }[];
    theresVideo?: boolean;
}

const DetailContentInfo: FunctionComponent<DetailContentInfoProps> = (props: DetailContentInfoProps) => {
    const className = Tailwind.builder()
        .add("grid grid-cols-2 sm:grid-cols-4")
        .add("w-full gap-y-4 place-content-between px-2")
        .addIf("md:col-span-2", props.theresVideo)
        .addIf("md:col-span-3", !props.theresVideo)
        .build();
    
    return (
        <div className={className}>
            {props.data?.filter(info => info?.title).map((info) => (
                <Container className="border-l-4 border-secondary dark:border-primary flex flex-col justify-between" key={info?.title}>
                    <Headline>{info?.title}</Headline>
                    <Text className={`text-start`}>{info?.description}</Text>
                </Container>
            ))}
        </div>
    );
}

export default DetailContentInfo;