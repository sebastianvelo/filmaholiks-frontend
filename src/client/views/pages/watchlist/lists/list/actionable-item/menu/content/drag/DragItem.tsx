import Action from "client/common/components/action/Action";
import { DragSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import { ItemProps } from "../../../item/Item";

export interface DragItemProps {
    item: ItemProps;
    ModalTrigger: () => JSX.Element;
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
    listIdx?: number;
    idx: number;
}

const DragItem: FunctionComponent<DragItemProps> = (props: DragItemProps) => {
    if (props.listIdx === undefined) return <></>;

    const getImage = () => {
        const image = new Image(200, 100);
        image.src = props.item.poster?.src ?? "";
        return image;
    }

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        if (props.delete) {
            WatchlistService.fromEvent.item.save(event, props.item, props.idx, props.listIdx);
            event.dataTransfer.setDragImage(getImage(), 100, 100)
        }
    };

    return (
        <Action className="flex justify-center items-center cursor-move" color={ComponentHovereableColor.SECONDARY} >
            <div draggable={true} onDragStart={onDragStart}>
                <DragSvg />
            </div>
        </Action>
    );
}

export default DragItem;