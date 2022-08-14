import { FunctionComponent } from "react";
import DetailDescription, { DetailDescriptionProps } from "./description/DetailDescription";
import DetailHeader, { DetailHeaderProps } from "./header/DetailHeader";
import DetailInfo, { DetailInfoProps } from "./info/DetailInfo";
import DetailVideo, { DetailVideoProps } from "./video/DetailVideo";

export interface DetailBodyProps {
    header?: DetailHeaderProps;
    description?: DetailDescriptionProps;
    video?: DetailVideoProps;
    info?: DetailInfoProps;
}

const DetailBody: FunctionComponent<DetailBodyProps> = (props: DetailBodyProps) => (
    <div className={`flex flex-col justify-between md:p-4 h-full`}>
        <div>
            {props.header && <DetailHeader {...props.header} />}
            {props.description && <DetailDescription {...props.description} />}
        </div>
        <div className={`grid lg:grid-cols-3 w-full`}>
            {props.video && <DetailVideo {...props.video} />}
            {props.info && <DetailInfo {...props.info} theresVideo={!!props.video} />}
        </div>
    </div>
);

export default DetailBody;