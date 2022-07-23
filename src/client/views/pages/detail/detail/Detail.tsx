import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import Image, { ImageProps } from "client/common/components/image/Image";
import { FunctionComponent } from "react";
import DetailDescription, { DetailDescriptionProps } from "./description/DetailDescription";
import DetailHeader, { DetailHeaderProps } from "./header/DetailHeader";
import DetailInfo, { DetailInfoProps } from "./info/DetailInfo";
import DetailVideo, { DetailVideoProps } from "./video/DetailVideo";

export interface DetailProps {
    poster?: ImageProps;
    backdrop?: ImageProps;
    header?: DetailHeaderProps;
    description?: DetailDescriptionProps;
    info?: DetailInfoProps;
    actions?: ActionProps[];
    video?: DetailVideoProps;
}

const Detail: FunctionComponent<DetailProps> = (props: DetailProps) => (
    <> 
        <div className={`flex flex-col md:flex-row w-full bg-gradient-to-tr from-black to-secondary-dark rounded-sm`}  style={{boxShadow: "0px 0px 5px rgba(250, 236, 167, 1)"}}>
            <Image {...props.poster!} className={`hidden md:block md:w-1/4 2xl:w-1/5 md:border-r border-b-2 border-primary-dark`} />
            <Image {...props.backdrop!} className={`md:hidden border-b-2 border-primary-dark`} />
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
        </div>
        <div className={`justify-items-stretch grid grid-cols-1 lg:grid-cols-2 divide-y divide-primary-light lg:divide-y-0`}>
            {props.actions?.map((action, index) => <Action key={index} {...action} />)}
        </div>
    </>
)

export default Detail;