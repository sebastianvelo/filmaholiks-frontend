import useWatchlist from "client/hooks/useWatchlist";
import { FunctionComponent } from "react";
import { CardHorizontalProps } from "../../../../../../../common/components/card-horizontal/CardHorizontal";
import AddToWatchlist from "./add-to-watchlist/AddToWatchlist";
import DeleteToWatchlist from "./delete-to-watchlist/DeleteToWatchlist";

export interface WatchlistButtonProps extends CardHorizontalProps { }

const WatchlistButton: FunctionComponent<WatchlistButtonProps> = (props: WatchlistButtonProps) => {
    const service = useWatchlist();

    const list = service.list.find(props.title ?? "");
    const lists = service.list.retrieveAll;

    return (
        <div>
            {!list && <AddToWatchlist item={props} lists={lists} save={service.item.save} />}
            {list && <DeleteToWatchlist list={list} delete={() => service.item.deleteByName(props.title ?? "")} />}
        </div>
    );
}

export default WatchlistButton;