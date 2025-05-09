import { FunctionComponent } from "react";

export interface DetailContentVideoProps {
    title?: string;
    src?: string;
    className?: string;
}

const DetailContentVideo: FunctionComponent<DetailContentVideoProps> = (props: DetailContentVideoProps) => (
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button
            //onClick={() => setTrailerPlaying(true)}
            className="bg-white/30 backdrop-blur-md text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
        >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
            </svg>
        </button>
    </div>
);

export default DetailContentVideo;