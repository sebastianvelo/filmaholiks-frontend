import Image, { ImageProps } from "client/common/atom/image/Image";
import { FunctionComponent } from "react";

export interface DetailPostersProps {
    poster?: ImageProps;
    backdrop?: ImageProps;
}

const DetailPosters: FunctionComponent<DetailPostersProps> = (props: DetailPostersProps) => (
    <>
        <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-96 md:h-screen md:max-h-[70vh] overflow-hidden relative">
                {props.backdrop && (
                    <img
                        src={props.backdrop.src}
                        alt={props.backdrop.alt}
                        className={`object-cover w-full h-full transform scale-110 ${props.backdrop.className || ""}`}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
            </div>
        </div>
    </>
)

export default DetailPosters;