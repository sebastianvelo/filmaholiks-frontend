import { useState } from "react";
import { CardHorizontalProps } from "../../../../../../common/components/card-horizontal/CardHorizontal";
import ModalItemContent from "./ModalItemContent";
import ModalItemTrigger from "./ModalItemTrigger";

export interface ModalItemProps {
    delete?: boolean;
    listIdx?: number;
    item: CardHorizontalProps;
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