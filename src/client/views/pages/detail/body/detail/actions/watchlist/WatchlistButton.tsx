import useWatchlist from "client/hooks/useWatchlist";
import { ListProps } from "client/views/components/watch-list/list/List";
import MediaType from "model/common/MediaType";
import { FunctionComponent } from "react";
import { CardHorizontalProps } from "../../../../../../../common/components/card-horizontal/CardHorizontal";
import AddToWatchlist from "./add-to-watchlist/AddToWatchlist";
import DeleteToWatchlist from "./delete-to-watchlist/DeleteToWatchlist";

export interface WatchlistButtonProps extends CardHorizontalProps {
    mediaType: MediaType;
    list?: ListProps;
 }

const WatchlistButton: FunctionComponent<WatchlistButtonProps> = (props: WatchlistButtonProps) => {
    const service = useWatchlist(props.mediaType);

    return (
        <div>
            {!props.list && <AddToWatchlist item={props} lists={[]} save={service.item.save} />}
            {props.list && <DeleteToWatchlist list={props.list} delete={() => service.item.deleteByName(props.title ?? "")} />}
        </div>
    );
}

export default WatchlistButton;