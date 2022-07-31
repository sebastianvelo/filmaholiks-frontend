import { FunctionComponent } from "react";
import DetailActions, { DetailActionsProps } from "./actions/DetailActions";
import DetailBody, { DetailBodyProps } from "./body/DetailBody";
import DetailPosters, { DetailPostersProps } from "./posters/DetailPosters";

export interface DetailHeaderProps extends DetailPostersProps, DetailBodyProps {
    actions?: DetailActionsProps;
}

const DetailHeader: FunctionComponent<DetailHeaderProps> = (props: DetailHeaderProps) => (
    <div className="bg-gradient-to-t from-secondary to-secondary-dark md:border-r md:border-l border-b border-primary">
        <div className={`flex flex-col md:flex-row w-full `}  >
            <DetailPosters {...props} />
            <DetailBody {...props} />
            <DetailActions {...props.actions} />
        </div>
    </div>
);

export default DetailHeader;