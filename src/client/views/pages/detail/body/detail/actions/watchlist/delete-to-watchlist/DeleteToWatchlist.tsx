import Action from "@atom/action/Action";
import Tailwind from "@tailwind-helper/Tailwind";
import { WatchlistColumnProps } from "client/views/components/watch-list/list/WatchlistColumn";

const actionClassName = Tailwind.builder()
    .add("px-6 py-2")
    .add("bg-white/10 dark:hover:bg-red-700 hover:bg-red-700 text-black hover:text-white dark:text-white font-medium rounded-lg backdrop-blur-md")
    .add("flex items-center gap-2 transition-all text-sm")
    .build();

export interface DeleteToWatchlistProps {
    list: WatchlistColumnProps;
    delete: () => void;
}

const DeleteToWatchlist: React.FC<DeleteToWatchlistProps> = (props: DeleteToWatchlistProps) => (
    <Action
        onClick={props.delete}
        label={`Delete from "${props.list.title}"`}
        className={actionClassName}
        revert
    />
);

export default DeleteToWatchlist;