import Action from "client/common/components/action/Action";
import Image from "client/common/components/image/Image";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import { ItemProps } from "../item/Item";

interface ActionableItemModalProps {
    opened: boolean;
    toggle: () => void;
    item: ItemProps;
}

const ActionableItemModal: FunctionComponent<ActionableItemModalProps> = (props: ActionableItemModalProps) => {
    const modalClassName = Tailwind.builder()
        .add("fixed place-items-center w-screen h-screen top-0 left-0 bg-dark bg-opacity-70 z-50 transition-colors duration-1000")
        .addIf("grid", props.opened)
        .addIf("hidden bg-opacity-0", !props.opened)
        .build();
    return (
        <div className={modalClassName}>
            <article className="border border-primary-dark bg-gradient-to-b from-secondary-dark to-black shadow-lg w-screen h-screen md:w-1/2 md:h-1/2 text-black p-4 space-x-8 flex">
                <Action path={props.item.path} revert>
                    {props.item.poster && <Image className="w-full rounded-tl-xl rounded-bl-xl" {...props.item.poster} />}
                </Action>
                <div className="space-y-1 flex flex-col w-full py-2 text-light space-y-4" onClick={props.toggle}>
                    <Action className={`text-light font-bold overflow-ellipsis text-left text-5xl`} path={props.item.path} label={props.item.title} revert />
                    <p className="text-xl">{props.item.info}</p>
                </div>
            </article>
        </div>
    );
}

export default ActionableItemModal;