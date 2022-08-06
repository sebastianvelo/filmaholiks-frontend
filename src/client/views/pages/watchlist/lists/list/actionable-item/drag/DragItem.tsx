import { DragSvg } from "client/common/components/svg/Svg";
import { FunctionComponent } from "react";

export interface DragItemProps {
    onDragStart?: React.DragEventHandler<HTMLDivElement>;
    onDragEnd?: React.DragEventHandler<HTMLDivElement>
    listIdx?: number;
}

const DragItem: FunctionComponent<DragItemProps> = (props: DragItemProps) => {
    if (props.listIdx === undefined) return <></>;
    return (
        <div draggable={props.listIdx !== undefined} onDragStart={props.onDragStart} onDragEnd={props.onDragEnd}>
            <p className="h-full flex justify-center items-center cursor-grab bg-light text-black" >
                <DragSvg />
            </p>
        </div>
    );
}

export default DragItem;