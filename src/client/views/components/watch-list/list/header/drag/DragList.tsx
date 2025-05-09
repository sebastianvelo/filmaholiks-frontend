import Action from "@atom/action/Action";
import { IconDrag } from "@components/svg/Svg";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { FunctionComponent } from "react";

interface DragListProps {
    listIdx: number;
}

const DragList: FunctionComponent<DragListProps> = (props: DragListProps) => {
    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        WatchlistHelper.fromEvent.list.save(event, props.listIdx);
        const img = new Image();
        event.dataTransfer.setDragImage(img, 0, 0);
    };

    return (
        <div draggable="true" onDragStart={onDragStart}>
            <Action className="h-full hidden sm:flex justify-center items-center cursor-move" color={ComponentHovereableColor.SECONDARY} >
                <IconDrag />
            </Action>
        </div>
    );
}

export default DragList;