import { FunctionComponent } from "react";
import { DetailPostersProps } from "../../posters/DetailPosters";
import { DetailContentHeaderProps } from "../header/DetailContentHeader";
import DetailContentVideo, { DetailContentVideoProps } from "../video/DetailContentVideo";

export interface DetailContentPosterProps extends DetailPostersProps {
    header?: DetailContentHeaderProps;
    video?: DetailContentVideoProps;
}

const DetailContentPoster: FunctionComponent<DetailContentPosterProps> = (props: DetailContentPosterProps) => (
    <div className="flex-shrink-0 w-64 mx-auto lg:mx-0">
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-2xl">
                {props.poster && (
                    <img
                        src={props.poster.src}
                        alt={props.poster.alt || props.header?.title}
                        className={`w-full h-full object-cover ${props.poster.className || ""}`}
                    />
                )}
                {props.video && (<DetailContentVideo {...props.video} />)}
            </div>
        </div>
    </div>
);

export default DetailContentPoster;