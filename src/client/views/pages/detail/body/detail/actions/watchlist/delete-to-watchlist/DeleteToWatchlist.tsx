import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";

export interface DeleteToWatchlistProps {
    title?: string;
    setExists: (value: boolean) => void;
}

const DeleteToWatchlist: FunctionComponent<DeleteToWatchlistProps> = (props: DeleteToWatchlistProps) => {
    const deleteItem = () => {
        WatchlistService.fromLocalStorage.item.deleteByName(props.title);
        props.setExists(false);
    }

    return (
        <Action label="- Delete" className="w-screen md:w-64" color={ComponentHovereableColor.DANGER} onClick={deleteItem} />
    );
}

export default DeleteToWatchlist;