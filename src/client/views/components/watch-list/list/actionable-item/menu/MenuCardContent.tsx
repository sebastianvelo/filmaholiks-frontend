import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";
import ActionCardButton from "./content/action/ActionCardButton";

export interface MenuCardContentProps {
    opened: boolean;
    ModalTrigger: () => JSX.Element;
    action: (requiresConfirmation?: boolean) => void;
    setOpen: (value: boolean) => void;
}

const MenuCardContent: FunctionComponent<MenuCardContentProps> = (props: MenuCardContentProps) => {
    const menuContentClassName = Tailwind.builder()
        .addIf("hidden", !props.opened)
        .addIf("flex justify-between bg-secondary-500 absolute bottom-0 right-12 z-40 rounded-sm h-10", props.opened)
        .build();

    return (
        <div className={menuContentClassName} onMouseLeave={() => props.setOpen(false)}>
            <ActionCardButton {...props} />
        </div>
    );
}

export default MenuCardContent;