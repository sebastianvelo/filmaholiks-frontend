import Action from "client/common/atom/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import { ListProps } from "../../../../../../../components/watch-list/list/List";

export interface DeleteToWatchlistProps {
    list: ListProps;
    delete: () => void;
}

const DeleteToWatchlist: FunctionComponent<DeleteToWatchlistProps> = (props: DeleteToWatchlistProps) => (
    <Action
        onClick={props.delete}
        label={`Delete from "${props.list.title}"`}
        className="w-screen md:w-64"
        color={ComponentHovereableColor.DANGER}
    />
);

export default DeleteToWatchlist;