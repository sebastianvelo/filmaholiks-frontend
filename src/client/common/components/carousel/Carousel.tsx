import { FunctionComponent } from "react";
import CarouselControl from "./CarouselControl";
import CarouselItems, { CarouselItemsProps } from "./CarouselItems";

export interface CarouselProps extends CarouselItemsProps { }

const Carousel: FunctionComponent<CarouselProps> = (props: CarouselProps) => (
    <div className="flex items-center">
        <CarouselControl id={props.id} right={false} />
        <CarouselItems {...props} />
        <CarouselControl id={props.id} right={true} />
    </div>
);

export default Carousel;