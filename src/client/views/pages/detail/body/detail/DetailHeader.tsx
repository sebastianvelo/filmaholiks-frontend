import { FunctionComponent } from "react";
import DetailActions, { DetailActionsProps } from "./actions/DetailActions";
import DetailBody, { DetailBodyProps } from "./body/DetailBody";
import DetailPosters, { DetailPostersProps } from "./posters/DetailPosters";

export interface DetailHeaderProps extends DetailPostersProps, DetailBodyProps {
    actions?: DetailActionsProps;
}

const DetailHeader: FunctionComponent<DetailHeaderProps> = (props: DetailHeaderProps) => (
    <div className={`flex flex-col lg:flex-row w-full border-b-2 md:border-b-0  2xl:border-l-2 2xl:border-t-4 2xl:border-r-2 border-primary`}>
        <DetailPosters {...props} />
        <div className={`flex flex-col w-full lg:w-3/4 2xl:w-4/5`}>
            <DetailActions {...props.actions} />
            <DetailBody {...props} />
        </div>
    </div>
);

export default DetailHeader;