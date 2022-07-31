import { FunctionComponent } from "react";
import AddToWatchlist, { AddToWatchlistProps } from "./add-to-watchlist/AddToWatchlist";

export interface DetailActionsProps {
    addToWatchlist?: AddToWatchlistProps;
}

const DetailActions: FunctionComponent<DetailActionsProps> = (props: DetailActionsProps) => (
    <div className="flex">
        {props.addToWatchlist && <AddToWatchlist {...props.addToWatchlist} />}
    </div>
);

export default DetailActions;