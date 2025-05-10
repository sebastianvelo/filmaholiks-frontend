import { FunctionComponent } from "react";
import DetailActions, { DetailActionsProps } from "../actions/DetailActions";
import DetailContentDescription, { DetailContentDescriptionProps } from "./description/DetailContentDescription";
import DetailContentHeader from "./header/DetailContentHeader";
import DetailContentInfo, { DetailContentInfoProps } from "./info/DetailContentInfo";
import DetailContentPoster, { DetailContentPosterProps } from "./poster/DetailContentPoster";

export interface DetailContentProps extends DetailContentPosterProps {
    description?: DetailContentDescriptionProps;
    info?: DetailContentInfoProps;
    actions?: DetailActionsProps;
}

const DetailContent: FunctionComponent<DetailContentProps> = (props: DetailContentProps) => (
    <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
            <DetailContentPoster {...props} />
            <div className="flex-1 backdrop-blur-md bg-white/70 dark:bg-black/30 rounded-2xl p-6 border border-white/10 shadow-xl">
                <DetailActions {...props.actions} />
                {props.header && (<DetailContentHeader {...props.header} mediaType={props.actions?.watchlistButton?.mediaType} />)}
                {props.description && (<DetailContentDescription {...props.description} />)}
                {props.info && props.info.data && props.info.data.length > 0 && <DetailContentInfo {...props.info} />}
            </div>
        </div>
    </div>
);

export default DetailContent;