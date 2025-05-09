import { FunctionComponent } from "react";

export interface DetailContentInfoProps {
    data: {
        title: string;
        description: string;
    }[];
    theresVideo?: boolean;
}

const DetailContentInfo: FunctionComponent<DetailContentInfoProps> = (props: DetailContentInfoProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {props.data?.map((item, index) => item && (
                <div
                    key={index}
                    className="backdrop-blur-lg bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors border-l-2 border-blue-500"
                >
                    <h3 className="text-white/60 text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-white font-medium">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default DetailContentInfo;