import { DetailContentVideoProps } from "./DetailContentVideo";

export interface DetailContentVideoModalProps extends DetailContentVideoProps {
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
}

const DetailContentVideoModal: React.FC<DetailContentVideoModalProps> = ({ className, src, title, isPlaying, setIsPlaying }) => {
    return (
        <>
            {isPlaying && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-tertiary-300"
                            onClick={() => setIsPlaying(false)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className={`aspect-video w-full ${className || ""}`}>
                            <iframe
                                src={src || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                                className="w-full h-full"
                                allowFullScreen
                                title={title || "Trailer"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default DetailContentVideoModal;