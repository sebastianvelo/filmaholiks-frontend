import $ from "jquery";
import { FunctionComponent } from "react";
import Action from "../action/Action";
import { ArrowLeftSvg, ArrowRightSvg } from "../svg/Svg";

const slide = (id: string, right: boolean) => {
    const carousel = $(`#${id}`);
    if (!carousel) return;
    const scroll = carousel.scrollLeft() ?? 0;
    const width = carousel.width() ?? 0;
    const move = (width - (width / 2)) * (right ? 1 : -1);
    carousel.scrollLeft(scroll + move);
};

export interface ControlProps {
    id: string;
    right: boolean;
}

const Control: FunctionComponent<ControlProps> = (props: ControlProps) => {
    const position = props.right ? '-right-8' : '-left-8';

    return (
        <Action onClick={() => slide(props.id, props.right)} className={`${position} z-20 absolute hidden md:block dark:bg-primary dark:hover:bg-primary-dark dark:text-dark bg-secondary hover:bg-secondary-dark text-light`}>
            {props.right ? <ArrowRightSvg /> : <ArrowLeftSvg />}
        </Action>
    );
}

export default Control;