import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import Item, { ItemProps } from "./item/Item";
import ActionItem, { ActionItemProps } from "./menu/content/action/ActionItem";
import DragItem from "./menu/content/drag/DragItem";
import useActionableItemMenu from "./menu/useMenuItem";
import useModalItem from "./modal/useModalItem";

interface ActionableItemProps extends ActionItemProps {
    item: ItemProps;
    idx: number;
    listIdx?: number;
    swapItems?: (idxB: number) => void;
}

const ActionableItem: FunctionComponent<ActionableItemProps> = (props: ActionableItemProps) => {
    const [ModalTrigger, ModalContent] = useModalItem(props);
    const [MenuTrigger, MenuContent] = useActionableItemMenu({
        ModalTrigger,
        ...props
    });

    const onDrop = (event: any) => {
        event.preventDefault();
        if (props.swapItems) {
            WatchlistService.fromEvent.item.handleSwap(event, props.swapItems);
        }
    };

    return (
        <>
            <div className="flex flex-col w-full shadow-xl" onDrop={onDrop}>
                <div className="flex relative">
                    <Item {...props.item} />
                    {props.listIdx !== undefined && (
                        <>
                            <div className="flex flex-col justify-between">
                                <DragItem {...props} />
                                <MenuTrigger />
                            </div>
                            <MenuContent />
                        </>
                    )}
                    {props.listIdx === undefined && (
                        <ActionItem {...props} />
                    )}
                </div>
            </div>
            <ModalContent />
        </>
    );
}

export default ActionableItem;