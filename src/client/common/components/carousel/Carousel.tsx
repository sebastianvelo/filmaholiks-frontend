import CarouselControl from "./CarouselControl";
import CarouselItems, { CarouselItemsProps } from "./CarouselItems";

export interface CarouselProps extends CarouselItemsProps { }

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => (
    <div className="flex items-center">
        <CarouselControl show={props.children.length > 0} id={props.id} right={false} />
        <CarouselItems {...props} />
        <CarouselControl show={props.children.length > 0} id={props.id} right={true} />
    </div>
);

export default Carousel;