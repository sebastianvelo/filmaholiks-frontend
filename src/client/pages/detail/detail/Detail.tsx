import Action, { ActionProps } from "components/action/Action";
import Image, { ImageProps } from "components/image/Image";
import { FunctionComponent } from "react";
import DetailHeader, { DetailHeaderProps } from "./header/DetailHeader";
import DetailInfo, { DetailInfoProps } from "./info/DetailInfo";
import DetailVideo, { DetailVideoProps } from "./video/DetailVideo";

export interface DetailProps {
    image: ImageProps;
    header: DetailHeaderProps;
    info: DetailInfoProps;
    actions: ActionProps[];
    video?: DetailVideoProps;
}

const Detail: FunctionComponent<DetailProps> = (props: DetailProps) => {
    return (
        <div className={`shadow-lg w-full divide-y divide-primary-light`}>
            <div className={`flex flex-col lg:space-x-2 items-center sm:items-start lg:flex-row lg:pb-0`}>
                <Image {...props.image} className={`self-center lg:self-start w-96`} />
                <div className={`flex flex-col justify-items-center  pt-2`}>
                    <DetailHeader {...props.header} />
                    <DetailInfo {...props.info} />
                </div>
            </div>
            <div className={`justify-items-stretch grid grid-cols-1 lg:grid-cols-2 divide-y divide-primary-light lg:divide-y-0`}>
                {props.actions?.map((action, index) => <Action key={index} {...action} />)}
            </div>
            {props.video && <DetailVideo {...props.video} />}
        </div>
    );
}

export default Detail;