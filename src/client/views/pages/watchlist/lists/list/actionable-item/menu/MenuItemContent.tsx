import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import ActionItem from "./content/action/ActionItem";

export interface MenuItemContentProps {
    opened: boolean;
    ModalTrigger: () => JSX.Element;
    action: (requiresConfirmation?: boolean) => void;
    setOpen: (value: boolean) => void;
}

const MenuItemContent: FunctionComponent<MenuItemContentProps> = (props: MenuItemContentProps) => {
    const menuContentClassName = Tailwind.builder()
        .addIf("hidden", !props.opened)
        .addIf("flex flex-col justify-between bg-secondary absolute bottom-0 right-12 z-50 rounded-sm h-24", props.opened)
        .build();

    return (
        <div className={menuContentClassName} onMouseLeave={() => props.setOpen(false)}>
            <ActionItem {...props} />
            <props.ModalTrigger />
        </div>
    );
}

export default MenuItemContent;