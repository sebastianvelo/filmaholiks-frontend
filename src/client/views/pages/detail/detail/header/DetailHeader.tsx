import { FunctionComponent } from "react";

export interface DetailHeaderProps {
    title: string;
    subtitle?: string;
}

const DetailHeader: FunctionComponent<DetailHeaderProps> = (props: DetailHeaderProps) => (
        <div className={`px-4 py-2 flex-col md:flex-row flex items-center lg:justify-center space-x-4`}>
            <div className={`flex items-end text-center space-x-2`}>
                <p className={`text-4xl md:text-4xl font-bold`}>{props.title}</p>
            </div>
            <p className={`text-2xl font-bold text-primary`}>{props.subtitle}</p>
        </div>
    )

export default DetailHeader;