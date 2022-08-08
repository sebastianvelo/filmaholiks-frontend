import { FunctionComponent } from "react";
import DetailActions, { DetailActionsProps } from "./actions/DetailActions";
import DetailBody, { DetailBodyProps } from "./body/DetailBody";
import DetailPosters, { DetailPostersProps } from "./posters/DetailPosters";

export interface DetailHeaderProps extends DetailPostersProps, DetailBodyProps {
    actions?: DetailActionsProps;
}

const DetailHeader: FunctionComponent<DetailHeaderProps> = (props: DetailHeaderProps) => (
    <div className="bg-gradient-to-tl from-secondary-dark to-black 2xl:border-r 2xl:border-l border-b border-primary-dark">
        <div className={`flex flex-col md:flex-row w-full`}  >
            <DetailPosters {...props} />
            <div className={`flex flex-col w-full md:w-3/4 2xl:w-4/5`}>
                <DetailActions {...props.actions} />
                <DetailBody {...props} />
            </div>
        </div>
    </div>
);

export default DetailHeader;