import { FunctionComponent } from "react";

export interface DetailHeaderProps {
    title: string;
    subtitle?: string;
}

const DetailHeader: FunctionComponent<DetailHeaderProps> = (props: DetailHeaderProps) => {
    return (
        <div className={`px-4 py-2 flex flex-col lg:flex-row lg:items-end lg:space-x-4`}>
            <div className={`flex items-end text-center space-x-2`}>
                <p className={`text-2xl md:text-3xl font-bold`}>{props.title}</p>
            </div>
            <p className={`text-xl font-bold text-primary-dark`}>{props.subtitle}</p>
        </div>
    );
}

export default DetailHeader;