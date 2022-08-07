import { useState } from "react";
import { ItemProps } from "../item/Item";
import MenuItemContent from "./MenuItemContent";
import MenuItemTrigger from "./MenuItemTrigger";

export interface MenuItemProps {
    item: ItemProps;
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
    listIdx?: number;
    idx: number;
    ModalTrigger: () => JSX.Element;
}

const useActionableItemMenu = (props: MenuItemProps) => {
    const [opened, setOpen] = useState(false);

    return ([
        () => <MenuItemTrigger setOpen={setOpen} />,
        () => <MenuItemContent {...props} opened={opened} />
    ]);
}

export default useActionableItemMenu;