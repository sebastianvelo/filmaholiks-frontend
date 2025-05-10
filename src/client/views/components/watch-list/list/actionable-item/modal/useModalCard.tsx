import { useState } from "react";
import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import ModalCardContent from "./ModalCardContent";
import ModalCardTrigger from "./ModalCardTrigger";

export interface ModalCardProps {
    delete?: boolean;
    listIdx?: number;
    item: CardHorizontalProps;
}

const useModalCard = (props: ModalCardProps) => {
    const [opened, setOpen] = useState(false);

    const toggle = () => { if (props.delete) setOpen(!opened) };

    return ([
        () => <ModalCardTrigger {...props} toggle={toggle} />,
        () => <ModalCardContent {...props} toggle={toggle} opened={opened} />
    ]);
}

export default useModalCard;