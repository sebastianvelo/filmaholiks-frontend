import Action from "client/common/atom/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import { ListProps } from "../../../../../../../components/watch-list/list/List";

const actionClassName = Tailwind.builder()
    .add("px-6 py-3")
    .add("bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md")
    .add("flex items-center gap-2 transition-all")
    .build();

export interface DeleteToWatchlistProps {
    list: ListProps;
    delete: () => void;
}

const DeleteToWatchlist: FunctionComponent<DeleteToWatchlistProps> = (props: DeleteToWatchlistProps) => (
    <Action
        onClick={props.delete}
        label={`Delete from "${props.list.title}"`}
        className={actionClassName}
        color={ComponentHovereableColor.DANGER}
    />
);

export default DeleteToWatchlist;