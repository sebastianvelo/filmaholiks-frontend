import Action from "client/common/components/action/Action";
import Image from "client/common/components/image/Image";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import { ItemProps } from "../item/Item";

export interface ModalItemContentProps {
    opened: boolean;
    toggle: () => void;
    item: ItemProps;
}

const ModalItemContent: FunctionComponent<ModalItemContentProps> = (props: ModalItemContentProps) => {
    const modalClassName = Tailwind.builder()
        .add("fixed place-items-center w-screen h-screen top-0 left-0 bg-black bg-opacity-90 z-50 transition-colors duration-1000")
        .addIf("grid", props.opened)
        .addIf("hidden bg-opacity-0", !props.opened)
        .build();

    const cardClassName = Tailwind.builder()
        .add("bg-gradient-to-b from-secondary-dark to-secondary")
        .add("w-screen h-screen md:w-1/2 md:h-96")
        .add("text-black space-x-8")
        .add("flex flex-col md:flex-row items-center md:items-start")
        .build();

    return (
        <div className={modalClassName}>
            <article className={cardClassName}>
                <Action path={props.item.path} revert>
                    {props.item.poster && <Image className="w-80 h-96 rounded-tl-xl rounded-bl-xl" {...props.item.poster} />}
                </Action>
                <div className="flex justify-between items-start w-full text-light">
                    <div className="space-y-2 w-full">
                        <div className="flex justify-between w-full">
                            <Action
                                className="text-light font-bold overflow-ellipsis text-left text-4xl py-2"
                                path={props.item.path}
                                label={props.item.title}
                                revert
                            />
                            <Action
                                label="X"
                                className="w-8 h-8 flex items-center justify-center font-black"
                                onClick={props.toggle}
                                color={ComponentHovereableColor.DANGER} revert />
                        </div>
                        <p className="text-xl">{props.item.info}</p>
                        <p>//aca se va a poder editar cuantas temporadas/caps viste</p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ModalItemContent;