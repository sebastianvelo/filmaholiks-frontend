import AddListButton, { AddListButtonProps } from "../buttons/AddListButton";
import EditModeButton, { EditModeButtonProps } from "../buttons/EditModeButton";

interface WatchlistHeaderProps extends EditModeButtonProps, AddListButtonProps {
    dynamic?: boolean;
}

const WatchlistHeader: React.FC<WatchlistHeaderProps> = ({ dynamic, isEditing, toggleEditing, add }) => {
    return (
        <div className="flex space-x-2">
            {dynamic && <EditModeButton isEditing={isEditing} toggleEditing={toggleEditing} />}
            {dynamic && <AddListButton add={add} />}
        </div>
    );
}

export default WatchlistHeader;