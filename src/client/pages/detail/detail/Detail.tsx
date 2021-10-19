import Action, { ActionProps } from "client/common/components/action/Action";
import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import Image, { ImageProps } from "client/common/components/image/Image";
import { FunctionComponent } from "react";
import DetailHeader, { DetailHeaderProps } from "./header/DetailHeader";
import DetailInfo, { DetailInfoProps } from "./info/DetailInfo";
import DetailVideo, { DetailVideoProps } from "./video/DetailVideo";
import Text from "client/common/components/text/Text";
import Skeleton from "client/common/components/skeleton/Skeleton";

export interface DetailProps {
    image?: ImageProps;
    header?: DetailHeaderProps;
    description?: {
        title: string;
        value: string;
    };
    info?: DetailInfoProps;
    actions?: ActionProps[];
    video?: DetailVideoProps;
    loading?: boolean;
}

const Detail: FunctionComponent<DetailProps> = (props: DetailProps) => {
    return (
        <div className={`w-screen`}>
            <div className={`flex flex-col lg:space-x-2 items-center sm:items-start lg:flex-row lg:pb-0`}>
                <Skeleton loading={props.loading} className={`self-center lg:self-start h-96 w-80`}>
                    <Image {...props.image!} className={`self-center lg:self-start h-96 w-80`} />
                </Skeleton>
                <div className={`flex flex-col justify-items-center pt-2 space-y-2 w-full`}>
                    <Skeleton loading={props.loading} className="w-96 h-16">
                        <DetailHeader {...props.header!} />
                    </Skeleton>
                    <Skeleton loading={props.loading} className="w-full h-32">
                        <Container>
                            <Headline>{props.description?.title}</Headline>
                            <Text>{props.description?.value}</Text>
                        </Container>
                    </Skeleton>
                    <Skeleton loading={props.loading} className="w-full h-28">
                        <DetailInfo {...props.info!} />
                    </Skeleton>
                </div>
            </div>
            <Skeleton loading={props.loading} className={`h-96 w-screen mt-10`}>
                {props.video && <DetailVideo {...props.video} />}
            </Skeleton>
            <div className={`justify-items-stretch grid grid-cols-1 lg:grid-cols-2 divide-y divide-primary-light lg:divide-y-0`}>
                {props.actions?.map((action, index) => <Action key={index} {...action} />)}
            </div>
        </div>
    );
}

export default Detail;