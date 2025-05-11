import { useState } from "react";
import { DetailActionsProps } from "./actions/DetailActions";
import DetailContent, { DetailContentProps } from "./content/DetailContent";
import DetailPosters, { DetailPostersProps } from "./posters/DetailPosters";

export interface DetailHeaderProps extends DetailPostersProps, DetailContentProps {
    actions?: DetailActionsProps;
}

const DetailHeader: React.FC<DetailHeaderProps> = (props: DetailHeaderProps) => {
    const [trailerPlaying, setTrailerPlaying] = useState(false);

    return (
        <div className="relative w-full">
            <DetailPosters {...props} />
            <DetailContent {...props} />
            {trailerPlaying && props.video && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-tertiary-300"
                            onClick={() => setTrailerPlaying(false)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className={`aspect-video w-full ${props.video.className || ""}`}>
                            <iframe
                                src={props.video.src || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                                className="w-full h-full"
                                allowFullScreen
                                title={props.video.title || "Trailer"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailHeader;