import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import ActionItem from "./content/action/ActionItem";

export interface MenuItemContentProps {
    opened: boolean;
    ModalTrigger: () => JSX.Element;
    action: (requiresConfirmation?: boolean) => void;
}

const MenuItemContent: FunctionComponent<MenuItemContentProps> = (props: MenuItemContentProps) => {
    const menuContentClassName = Tailwind.builder()
        .addIf("hidden", !props.opened)
        .addIf("flex justify-between bg-secondary absolute bottom-4 right-8 z-50 rounded-sm", props.opened)
        .build();

    return (
        <div className={menuContentClassName}>
            <props.ModalTrigger />
            <ActionItem {...props} />
        </div>
    );
}

export default MenuItemContent;