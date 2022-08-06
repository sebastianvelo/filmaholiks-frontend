import WatchlistService from "client/service/WatchlistService";
import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { FunctionComponent, useState } from "react";
import AddToWatchlist from "./add-to-watchlist/AddToWatchlist";
import DeleteToWatchlist from "./delete-to-watchlist/DeleteToWatchlist";

export interface WatchlistButtonProps extends ItemProps { }

const WatchlistButton: FunctionComponent<WatchlistButtonProps> = (props: WatchlistButtonProps) => {
    const [exists, setExists] = useState(WatchlistService.fromLocalStorage.item.exists(props.title));

    return (
        <div>
            {!exists && <AddToWatchlist setExists={setExists} item={props} />}
            {exists && <DeleteToWatchlist setExists={setExists} title={props.title} />}
        </div>
    );
}

export default WatchlistButton;