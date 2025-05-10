import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import { useState } from "react";
import MenuCardContent from "./MenuCardContent";
import MenuCardTrigger from "./MenuCardTrigger";

export interface MenuCardProps {
    item: CardHorizontalProps;
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
    listIdx?: number;
    idx: number;
    ModalTrigger: () => JSX.Element;
}

const useMenuCard = (props: MenuCardProps) => {
    const [opened, setOpen] = useState(false);

    return ([
        () => <MenuCardTrigger toggle={() => setOpen(!opened)} />,
        () => <MenuCardContent {...props} opened={opened} setOpen={setOpen} />
    ]);
}

export default useMenuCard;