import { useState } from "react";
import { DetailActionsProps } from "./actions/DetailActions";
import DetailContent, { DetailContentProps } from "./content/DetailContent";
import DetailPosters, { DetailPostersProps } from "./posters/DetailPosters";

export interface DetailHeaderProps extends DetailPostersProps, DetailContentProps {
    actions?: DetailActionsProps;
}

const DetailHeader: React.FC<DetailHeaderProps> = (props: DetailHeaderProps) => {

    return (
        <div className="relative w-full">
            <DetailPosters {...props} />
            <DetailContent {...props} />

        </div>
    );
};

export default DetailHeader;