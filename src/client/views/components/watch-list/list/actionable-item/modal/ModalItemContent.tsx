import Action from "client/common/atom/action/Action";
import Image from "client/common/atom/image/Image";
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
        .add("rounded-xl absolute place-items-center w-screen h-96 top-12 left-0 z-50 bg-white dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 dark:bg-opacity-60")
        .addIf("grid", props.opened)
        .addIf("hidden bg-opacity-0", !props.opened)
        .build();

    const cardClassName = Tailwind.builder()
        .add("text-black space-x-8 h-full w-full z-50")
        .add("flex flex-col md:flex-row items-center md:items-start")
        .build();

    return (
        <div className={modalClassName}>
            <article className={cardClassName}>
                <Action path={props.item.path} revert>
                    {props.item.poster && <Image className="w-80 h-96 rounded-tl-xl rounded-bl-xl" {...props.item.poster} />}
                </Action>
                <Action
                    label="X"
                    className="p-2 w-12 h-8 flex items-center justify-center font-black"
                    onClick={props.toggle}
                    color={ComponentHovereableColor.DANGER} revert />
                <div className="flex justify-between items-start w-full text-light">
                    <div className="space-y-2 w-full">
                        <div className="flex justify-between w-full">
                            <Action
                                className="text-light font-bold overflow-ellipsis text-left text-4xl py-2"
                                path={props.item.path}
                                label={props.item.title}
                                revert
                            />
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