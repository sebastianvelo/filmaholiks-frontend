import CardHorizontal, { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import WatchlistHelper from "client/helper/WatchlistHelper";
import ActionCardButton, { ActionCardButtonProps } from "../../buttons/ActionCardButton";
import DragCardButton from "../../buttons/DragCardButton";

export interface ActionableCardProps extends ActionCardButtonProps {
    item: CardHorizontalProps;
    idx: number;
    listIdx?: number;
    swapItems?: (idxB: number) => void;
}

const ActionableCard: React.FC<ActionableCardProps> = (props: ActionableCardProps) => {
    const onDrop = (event: any) => {
        event.preventDefault();
        if (props.swapItems) {
            WatchlistHelper.fromEvent.item.handleSwap(event, props.listIdx, props.swapItems);
        }
    };

    return (
        <div className="flex flex-col w-full shadow-xl h-20" onDrop={onDrop}>
            <div className="flex items-center justify-center h-full">
                <CardHorizontal {...props.item} />
                {props.listIdx !== undefined && (
                    <div className="flex flex-col justify-stretch h-full">
                        <DragCardButton {...props} />
                        <ActionCardButton {...props} />
                    </div>
                )}
                {props.listIdx === undefined && (
                    <div className="flex flex-col h-full">
                        <ActionCardButton {...props} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ActionableCard;