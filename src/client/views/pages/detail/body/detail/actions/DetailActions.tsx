import { FunctionComponent } from "react";
import WatchlistButton, { WatchlistButtonProps } from "./watchlist/WatchlistButton";

export interface DetailActionsProps {
    watchlistButton?: WatchlistButtonProps;
}

const DetailActions: FunctionComponent<DetailActionsProps> = (props: DetailActionsProps) => (
    <div className="flex md:pl-8 md:py-2 w-full">
        {props.watchlistButton && <WatchlistButton {...props.watchlistButton} />}
    </div>
);

export default DetailActions;