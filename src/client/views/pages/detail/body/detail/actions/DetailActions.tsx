import { FunctionComponent } from "react";
import WatchlistButton, { WatchlistButtonProps } from "./watchlist/WatchlistButton";

export interface DetailActionsProps {
    watchlistButton?: WatchlistButtonProps;
}

const DetailActions: FunctionComponent<DetailActionsProps> = (props: DetailActionsProps) => (
    <div className="flex flex-wrap gap-4 mb-8">
        {/*props.video && (
            <button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all"
            //onClick={() => setTrailerPlaying(true)}
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4l12 6-12 6z" />
                </svg>
                Ver trailer
            </button>
        )*/}
        {props.watchlistButton && (<WatchlistButton {...props.watchlistButton} />)}
        {/*props.actions && (
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg flex items-center gap-2 transition-all backdrop-blur-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Compartir
            </button>
        )*/}
    </div>
)

/*(
<div className="flex md:pl-8 md:py-2 w-full">
    {props.watchlistButton && <WatchlistButton {...props.watchlistButton} />}
</div>
);*/

export default DetailActions;