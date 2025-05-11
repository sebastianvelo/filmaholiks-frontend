import Image, { ImageProps } from "@atom/image/Image";
import { FunctionComponent } from "react";

export interface DetailPostersProps {
    poster?: ImageProps;
    backdrop?: ImageProps;
}

const DetailPosters: FunctionComponent<DetailPostersProps> = (props: DetailPostersProps) => (
    <>
        <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-96 md:h-screen md:max-h-[50vh] overflow-hidden relative">
                {props.backdrop && (
                    <img
                        src={props.backdrop.src}
                        alt={props.backdrop.alt}
                        className={`object-cover w-full h-full transform ${props.backdrop.className || ""}`}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-200/80 dark:from-slate-950 dark:via-slate-950/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200/50 dark:from-slate-950/80 via-transparent to-transparent" />
            </div>
        </div>
    </>
)

export default DetailPosters;