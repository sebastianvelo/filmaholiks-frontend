import Tailwind from "client/common/tailwind/Tailwind";
import $ from "jquery";
import { FunctionComponent } from "react";
import Action from "../../atom/action/Action";
import { ArrowLeftSvg, ArrowRightSvg } from "../svg/Svg";

const slide = (id: string, right: boolean) => {
    const carousel = $(`#${id}`);
    if (!carousel) return;
    const scroll = carousel.scrollLeft() ?? 0;
    const width = carousel.width() ?? 0;
    const move = (width - (width / 2)) * (right ? 1 : -1);
    carousel.scrollLeft(scroll + move);
};

export interface CarouselControlProps {
    id: string;
    right: boolean;
    show: boolean;
}

const CarouselControl: FunctionComponent<CarouselControlProps> = (props: CarouselControlProps) => {
    const className = Tailwind.builder()
        .add("z-20 absolute hidden md:block")
        .add("bg-secondary hover:bg-secondary-dark text-light")
        .add("dark:bg-primary dark:hover:bg-primary-dark dark:text-dark")
        .add("rounded-full")
        .addIf("-right-8", props.right)
        .addIf("-left-8", !props.right)
        .build();

    if (!props.show) return <></>;
    return (
        <Action onClick={() => slide(props.id, props.right)} className={className}>
            {props.right ? <ArrowRightSvg /> : <ArrowLeftSvg />}
        </Action>
    );
}

export default CarouselControl;