import { useState } from "react";
import { CardHorizontalProps } from "../../../../../../common/components/card-horizontal/CardHorizontal";
import MenuItemContent from "./MenuItemContent";
import MenuItemTrigger from "./MenuItemTrigger";

export interface MenuItemProps {
    item: CardHorizontalProps;
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
    listIdx?: number;
    idx: number;
    ModalTrigger: () => JSX.Element;
}

const useActionableItemMenu = (props: MenuItemProps) => {
    const [opened, setOpen] = useState(false);

    return ([
        () => <MenuItemTrigger toggle={() => setOpen(!opened)} />,
        () => <MenuItemContent {...props} opened={opened} setOpen={setOpen} />
    ]);
}

export default useActionableItemMenu;