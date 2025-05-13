import { IconPlay } from "client/common/components/svg/Svg";
import { useState } from "react";
import DetailContentVideoModal from "./DetailContentVideoModal";

export interface DetailContentVideoProps {
    title?: string;
    src?: string;
    className?: string;
}

const DetailContentVideo: React.FC<DetailContentVideoProps> = ({ className, src, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-white/30 backdrop-blur-md text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                    <IconPlay />
                </button>
            </div>
            <DetailContentVideoModal
                className={className}
                src={src}
                title={title}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
            />
        </>

    );
}

export default DetailContentVideo;