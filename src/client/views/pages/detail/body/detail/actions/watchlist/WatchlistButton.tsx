import useWatchlist from "@hooks/useWatchlist";
import { ListProps } from "client/views/components/watch-list/list/List";
import MediaType from "shared/types/MediaType";
import { FunctionComponent, useState } from "react";
import { CardHorizontalProps } from "../../../../../../../common/components/card-horizontal/CardHorizontal";
import AddToWatchlist from "./add-to-watchlist/AddToWatchlist";
import DeleteToWatchlist from "./delete-to-watchlist/DeleteToWatchlist";

export interface WatchlistButtonProps extends CardHorizontalProps {
    mediaType: MediaType;
    list?: ListProps;
    lists: ListProps[];
}

const WatchlistButton: FunctionComponent<WatchlistButtonProps> = (props: WatchlistButtonProps) => {
    const service = useWatchlist(props.mediaType, props.lists);
    const [list, setList] = useState(props.list);

    const saveItem = (listIdx: number) => {
        service.item.save(listIdx, props);
        setList(props.lists[listIdx]);
    };

    const deleteItem = () => {
        service.item.delete(list!.order, props.id);
        setList(undefined);
    }

    return (
        <div>
            {!list && <AddToWatchlist lists={props.lists ?? []} save={saveItem} />}
            {list && <DeleteToWatchlist list={list} delete={deleteItem} />}
        </div>
    );
}

export default WatchlistButton;