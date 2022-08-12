import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import DetailActions, { DetailActionsProps } from "./actions/DetailActions";
import DetailBody, { DetailBodyProps } from "./body/DetailBody";
import DetailPosters, { DetailPostersProps } from "./posters/DetailPosters";

export interface DetailHeaderProps extends DetailPostersProps, DetailBodyProps {
    actions?: DetailActionsProps;
}


const DetailHeader: FunctionComponent<DetailHeaderProps> = (props: DetailHeaderProps) => {
    const className = Tailwind.builder()
        .add("flex flex-col lg:flex-row w-full")
        .add("2xl:border-t-8 2xl:border-b-2 dark:border-primary border-secondary")
        .add("bg-white dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 dark:bg-opacity-70")
        .build();

    return (
        <div className={className}>
            <DetailPosters {...props} />
            <div className={`flex flex-col w-full lg:w-3/4 2xl:w-4/5`}>
                <DetailActions {...props.actions} />
                <DetailBody {...props} />
            </div>
        </div>
    );
}

export default DetailHeader;