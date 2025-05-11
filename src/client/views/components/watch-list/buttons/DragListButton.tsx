import Action from "@atom/action/Action";
import { IconDrag } from "@components/svg/Svg";
import WatchlistHelper from "client/helper/WatchlistHelper";

interface DragListButtonProps {
    listIdx: number;
}

const DragListButton: React.FC<DragListButtonProps> = (props: DragListButtonProps) => {
    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        WatchlistHelper.fromEvent.list.save(event, props.listIdx);
        const img = new Image();
        event.dataTransfer.setDragImage(img, 0, 0);
    };

    return (
        <div className="rounded-tr-md hidden md:flex justify-center items-center cursor-move h-full p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700" draggable="true" onDragStart={onDragStart}>
            <Action className="text-gray-600 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200" revert>
                <IconDrag />
            </Action>
        </div>
    );
}

export default DragListButton;