import Action from "@atom/action/Action";
import Image from "@atom/image/Image";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";
import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";

export interface ModalCardContentProps {
    opened: boolean;
    toggle: () => void;
    item: CardHorizontalProps;
}

const ModalCardContent: FunctionComponent<ModalCardContentProps> = (props: ModalCardContentProps) => {
    const modalClassName = Tailwind.builder()
        .add("rounded-xl absolute place-items-center w-screen h-96 top-0 left-0 z-50 bg-white dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 dark:bg-opacity-60")
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
                    {props.item.image && <Image className="w-80 h-96 rounded-tl-xl rounded-bl-xl" {...props.item.image} />}
                </Action>
                <Action
                    label="X"
                    className="p-2 w-12 h-8 flex items-center justify-center font-black"
                    onClick={props.toggle}
                    color={ComponentHovereableColor.DANGER} revert />
                <div className="flex justify-between items-start w-full text-light z-100">
                    <div className="space-y-2 w-full">
                        <div className="flex justify-between w-full">
                            <Action
                                className="text-light font-bold overflow-ellipsis text-left text-4xl py-2"
                                path={props.item.path}
                                label={props.item.title}
                                revert
                            />
                        </div>
                        <p className="text-xl">{props.item.subtitle}</p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ModalCardContent;