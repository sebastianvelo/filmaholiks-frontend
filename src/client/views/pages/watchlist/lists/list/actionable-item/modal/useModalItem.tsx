import { useState } from "react";
import { ItemProps } from "../item/Item";
import ModalItemContent from "./ModalItemContent";
import ModalItemTrigger from "./ModalItemTrigger";

export interface ModalItemProps {
    delete?: boolean;
    listIdx?: number;
    item: ItemProps;
}

const useModalItem = (props: ModalItemProps) => {
    const [opened, setOpen] = useState(false);

    const toggle = () => { if (props.delete) setOpen(!opened) };

    return ([
        () => <ModalItemTrigger {...props} toggle={toggle} />,
        () => <ModalItemContent {...props} toggle={toggle} opened={opened} />
    ]);
}

export default useModalItem;