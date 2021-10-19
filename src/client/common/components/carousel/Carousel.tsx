import Items, { ItemsProps } from "./Items";
import Control from "./Control";

export interface CarouselProps extends ItemsProps {}

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
    return (
        <div className={`flex items-center`}>
            <Control id={props.id} right={false} />
            <Items {...props} />
            <Control id={props.id} right={true} />
        </div>
    );
}

export default Carousel;