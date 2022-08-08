import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { ListProps } from "client/views/pages/watchlist/lists/list/List";
import { FunctionComponent } from "react";

export interface DeleteToWatchlistProps {
    title: string;
    list: ListProps;
    delete: (query: string) => void;
}

const DeleteToWatchlist: FunctionComponent<DeleteToWatchlistProps> = (props: DeleteToWatchlistProps) => (
    <Action
        onClick={() => props.delete(props.title)}
        label={`Delete from "${props.list.title}"`}
        className="w-screen md:w-64"
        color={ComponentHovereableColor.DANGER}
    />
);

export default DeleteToWatchlist;