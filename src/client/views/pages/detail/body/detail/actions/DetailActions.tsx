import { FunctionComponent } from "react";
import WatchlistButton, { WatchlistButtonProps } from "./watchlist/WatchlistButton";

export interface DetailActionsProps {
    watchlistButton?: WatchlistButtonProps;
}

const DetailActions: FunctionComponent<DetailActionsProps> = (props: DetailActionsProps) => (
    <div className="flex flex-wrap gap-4 mb-8">
        {props.watchlistButton && (<WatchlistButton {...props.watchlistButton} />)}
    </div>
)

export default DetailActions;