import useWatchlist from "client/hooks/useWatchlist";
import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { FunctionComponent } from "react";
import AddToWatchlist from "./add-to-watchlist/AddToWatchlist";
import DeleteToWatchlist from "./delete-to-watchlist/DeleteToWatchlist";

export interface WatchlistButtonProps extends ItemProps { }

const WatchlistButton: FunctionComponent<WatchlistButtonProps> = (props: WatchlistButtonProps) => {
    const service = useWatchlist();

    const list = service.list.find(props.title ?? "");
    const lists = service.list.retrieveAll;

    return (
        <div>
            {!list && <AddToWatchlist item={props} lists={lists} save={service.item.save} />}
            {list && <DeleteToWatchlist title={props.title ?? ""} list={list} delete={service.item.deleteByName} />}
        </div>
    );
}

export default WatchlistButton;