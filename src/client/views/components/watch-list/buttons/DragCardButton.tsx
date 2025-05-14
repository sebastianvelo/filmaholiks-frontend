import Action from "@atom/action/Action";
import { IconDrag } from "@components/svg/Svg";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";

export interface DragCardButtonProps {
    item: CardHorizontalProps;
    delete?: boolean;
    listIdx?: number;
    idx: number;
}

const DragCardButton: React.FC<DragCardButtonProps> = (props: DragCardButtonProps) => {
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
        <Action className="hidden md:flex justify-center items-center cursor-move h-full w-full rounded-tr-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
            <div draggable={true} onDragStart={onDragStart} className="flex items-center justify-center w-full h-full">
                <div className="text-gray-600 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                    <IconDrag />
                </div>
            </div>
        </Action>
    );
}

export default DragCardButton;