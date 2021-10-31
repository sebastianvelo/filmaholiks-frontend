import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import Image, { ImageProps } from "client/common/components/image/Image";
import Text from "client/common/components/text/Text";
import { FunctionComponent } from "react";
import DetailHeader, { DetailHeaderProps } from "./header/DetailHeader";
import DetailInfo, { DetailInfoProps } from "./info/DetailInfo";
import DetailVideo, { DetailVideoProps } from "./video/DetailVideo";

export interface DetailProps {
    image?: ImageProps;
    header?: DetailHeaderProps;
    description?: {
        title: string;
        description: string;
    };
    info?: DetailInfoProps;
    actions?: ActionProps[];
    video?: DetailVideoProps;
}

const Detail: FunctionComponent<DetailProps> = (props: DetailProps) => (
    <div className={`w-screen`}>
        <div className={`flex flex-col lg:space-x-2 items-center sm:items-start lg:pb-0 divide-y divide-primary`}>
            <div className={`flex flex-col md:flex-row w-full space-x-2 space-y-2 min-h-96`}>
                <Image {...props.image!} className={`self-center md:self-start w-full md:w-1/3`} />
                <div className="md:w-2/3 flex flex-col items-center justify-around">
                    <DetailHeader {...props.header!} />
                    {props.video && <DetailVideo {...props.video} />}
                    <Container>
                        <Headline>{props.description?.title}</Headline>
                        <Text>{props.description?.description}</Text>
                    </Container>
                </div>
            </div>
            <div className={`flex flex-col justify-items-center pt-2 space-y-2 w-full divide-y divide-primary`}>
                <DetailInfo {...props.info!} />
            </div>
        </div>
        <div className={`justify-items-stretch grid grid-cols-1 lg:grid-cols-2 divide-y divide-primary-light lg:divide-y-0`}>
            {props.actions?.map((action, index) => <Action key={index} {...action} />)}
        </div>
    </div>
)

export default Detail;