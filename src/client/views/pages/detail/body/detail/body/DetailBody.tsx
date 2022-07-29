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
    <div className={`md:w-3/4 2xl:w-4/5 flex flex-col justify-between p-4`}>
        <div>
            {props.header && <DetailHeader {...props.header} />}
            {props.description && <DetailDescription {...props.description} />}
        </div>
        <div className={`grid md:grid-cols-3 w-full`}>
            {props.video && <DetailVideo {...props.video} />}
            {props.info && <DetailInfo {...props.info} />}
        </div>
    </div>
);

export default DetailBody;