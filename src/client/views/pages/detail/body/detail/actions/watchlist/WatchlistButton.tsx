import useWatchlist from "@hooks/useWatchlist";
import { WatchlistColumnProps } from "client/views/components/watch-list/list/WatchlistColumn";
import MediaType from "shared/types/MediaType";
import { FunctionComponent, useState } from "react";
import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import AddToWatchlist from "./add-to-watchlist/AddToWatchlist";
import DeleteToWatchlist from "./delete-to-watchlist/DeleteToWatchlist";

export interface WatchlistButtonProps extends CardHorizontalProps {
    mediaType: MediaType;
    list?: WatchlistColumnProps;
    lists: WatchlistColumnProps[];
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
        <div className="absolute right-2 top-2">
            {!list && <AddToWatchlist lists={props.lists ?? []} save={saveItem} />}
            {list && <DeleteToWatchlist list={list} delete={deleteItem} />}
        </div>
    );
}

export default WatchlistButton;