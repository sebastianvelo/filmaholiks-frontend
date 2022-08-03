import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { deleteCardInLocalStorageByName } from "client/hooks/useWatchlist";
import { FunctionComponent } from "react";

export interface DeleteToWatchlistProps {
    title?: string;
    setExists: (value: boolean) => void;
}

const DeleteToWatchlist: FunctionComponent<DeleteToWatchlistProps> = (props: DeleteToWatchlistProps) => {
    const deleteItem = () => {
        deleteCardInLocalStorageByName(props.title);
        props.setExists(false);
    }

    return (
        <Action label="- Delete" className="w-screen md:w-64" color={ComponentHovereableColor.DANGER} onClick={deleteItem} />
    );
}

export default DeleteToWatchlist;