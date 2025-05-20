import Tailwind from "@tailwind-helper/Tailwind";
import $ from "jquery";
import Action from "../../atom/action/Action";
import { IconChevronLeft, IconChevronRight } from "../svg/Svg";

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

const CarouselControl: React.FC<CarouselControlProps> = (props: CarouselControlProps) => {
    const className = Tailwind.builder()
        .add("z-20 absolute hidden md:block")
        .add("bg-secondary-500 hover:bg-secondary-900 text-light")
        .add("dark:bg-primary-500 dark:hover:bg-primary-900 dark:text-white")
        .add("rounded-full shadow-lg")
        .addIf("-right-8", props.right)
        .addIf("-left-8", !props.right)
        .build();

    if (!props.show) return <></>;
    return (
        <Action onClick={() => slide(props.id, props.right)} className={className}>
            {props.right ? <IconChevronRight /> : <IconChevronLeft />}
        </Action>
    );
}

export default CarouselControl;