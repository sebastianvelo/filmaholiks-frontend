import Action from "client/common/components/action/Action";
import { DragSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";

interface DragListProps {
    listIdx: number;
}

const DragList: FunctionComponent<DragListProps> = (props: DragListProps) => {
    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        WatchlistService.fromEvent.list.save(event, props.listIdx);
        const img = new Image();
        event.dataTransfer.setDragImage(img, 0, 0);
    };

    return (
        <div draggable="true" onDragStart={onDragStart}>
            <Action className="h-full flex justify-center items-center cursor-move" color={ComponentHovereableColor.INFO} >
                <DragSvg />
            </Action>
        </div>
    );
}

export default DragList;