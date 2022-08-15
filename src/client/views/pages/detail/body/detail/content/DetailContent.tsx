import { FunctionComponent } from "react";
import DetailContentDescription, { DetailContentDescriptionProps } from "./description/DetailContentDescription";
import DetailContentHeader, { DetailContentHeaderProps } from "./header/DetailContentHeader";
import DetailContentInfo, { DetailContentInfoProps } from "./info/DetailContentInfo";
import DetailContentVideo, { DetailContentVideoProps } from "./video/DetailContentVideo";

export interface DetailContentProps {
    header?: DetailContentHeaderProps;
    description?: DetailContentDescriptionProps;
    video?: DetailContentVideoProps;
    info?: DetailContentInfoProps;
}

const DetailContent: FunctionComponent<DetailContentProps> = (props: DetailContentProps) => (
    <div className={`flex flex-col justify-between md:p-4 h-full`}>
        <div>
            {props.header && <DetailContentHeader {...props.header} />}
            {props.description && <DetailContentDescription {...props.description} />}
        </div>
        <div className={`grid lg:grid-cols-3 w-full`}>
            {props.video && <DetailContentVideo {...props.video} />}
            {props.info && <DetailContentInfo {...props.info} theresVideo={!!props.video} />}
        </div>
    </div>
);

export default DetailContent;