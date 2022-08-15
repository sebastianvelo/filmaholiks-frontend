import Action from "client/common/atom/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import { ListProps } from "../../../../../../../components/watch-list/list/List";

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