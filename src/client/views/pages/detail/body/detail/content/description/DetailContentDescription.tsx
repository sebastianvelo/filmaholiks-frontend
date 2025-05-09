import { FunctionComponent } from "react";

export interface DetailContentDescriptionProps {
    title: string;
    description: string;
}

const DetailContentDescription: FunctionComponent<DetailContentDescriptionProps> = (props: DetailContentDescriptionProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold text-white/90 mb-2">{props.title}</h2>
        <p className="text-white/80 text-lg leading-relaxed">
            {props.description}
        </p>
    </div>
);

export default DetailContentDescription;