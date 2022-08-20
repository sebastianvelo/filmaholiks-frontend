import WatchlistHelper from "client/helper/WatchlistHelper";
import { FunctionComponent } from "react";
import CardHorizontal, { CardHorizontalProps } from "../../../../../common/components/card-horizontal/CardHorizontal";
import ActionCard, { ActionItemProps } from "./menu/content/action/ActionCard";
import DragCard from "./menu/content/drag/DragCard";
import useMenuCard from "./menu/useMenuCard";
import useModalCard from "./modal/useModalCard";

export interface ActionableCardProps extends ActionItemProps {
    item: CardHorizontalProps;
    idx: number;
    listIdx?: number;
    swapItems?: (idxB: number) => void;
}

const ActionableCard: FunctionComponent<ActionableCardProps> = (props: ActionableCardProps) => {
    const [ModalTrigger, ModalContent] = useModalCard(props);
    const [MenuTrigger, MenuContent] = useMenuCard({
        ModalTrigger,
        ...props
    });

    const onDrop = (event: any) => {
        event.preventDefault();
        if (props.swapItems) {
            WatchlistHelper.fromEvent.item.handleSwap(event, props.listIdx, props.swapItems);
        }
    };

    return (
        <>
            <div className="flex flex-col w-full shadow-xl h-20" onDrop={onDrop}>
                <div className="flex items-center justify-center h-full">
                    <CardHorizontal {...props.item} />
                    {props.listIdx !== undefined && (
                        <div className="relative">
                            <div className="flex flex-col justify-between h-full">
                                <DragCard {...props} />
                                <MenuTrigger />
                            </div>
                            <MenuContent />
                        </div>
                    )}
                    {props.listIdx === undefined && (
                        <div className="flex flex-col h-full">
                            <ActionCard {...props} />
                        </div>
                    )}
                </div>
            </div>
            <ModalContent />
        </>

    );
}

export default ActionableCard;