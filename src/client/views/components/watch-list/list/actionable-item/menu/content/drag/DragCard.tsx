import Action from "client/common/atom/action/Action";
import { DragSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { FunctionComponent } from "react";
import { CardHorizontalProps } from "../../../../../../../../common/components/card-horizontal/CardHorizontal";

export interface DragCardProps {
    item: CardHorizontalProps;
    delete?: boolean;
    listIdx?: number;
    idx: number;
}

const DragCard: FunctionComponent<DragCardProps> = (props: DragCardProps) => {
    if (props.listIdx === undefined) return <></>;

    const getImage = () => {
        const image = new Image(50, 50);
        image.src = props.item.image?.src ?? "";
        return image;
    }

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        if (props.delete) {
            WatchlistHelper.fromEvent.item.save(event, props.item, props.idx, props.listIdx);
            event.dataTransfer.setDragImage(getImage(), 100, 100)
        }
    };

    return (
        <Action className="hidden md:flex justify-center items-center cursor-move h-10" color={ComponentHovereableColor.NORMAL} >
            <div draggable={true} onDragStart={onDragStart}>
                <DragSvg />
            </div>
        </Action>
    );
}

export default DragCard;