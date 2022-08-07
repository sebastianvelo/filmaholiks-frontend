import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import { ItemProps } from "../item/Item";
import ActionItem from "./content/action/ActionItem";
import DragItem from "./content/drag/DragItem";

export interface MenuItemContentProps {
    opened: boolean;
    item: ItemProps;
    ModalTrigger: () => JSX.Element;
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
    listIdx?: number;
    idx: number;
}

const MenuItemContent: FunctionComponent<MenuItemContentProps> = (props: MenuItemContentProps) => {
    const menuContentClassName = Tailwind.builder()
        .addIf("hidden", !props.opened)
        .addIf("flex flex-col justify-between bg-secondary absolute top-0 right-8 z-50 border-black border-2 border-black rounded-md", props.opened)
        .build();

    return (
        <div className={menuContentClassName}>
            <DragItem {...props} />
            <props.ModalTrigger />
            <ActionItem {...props} />
        </div>
    );
}

export default MenuItemContent;