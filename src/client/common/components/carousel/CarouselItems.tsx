import { FunctionComponent } from "react";

export interface CarouselItemsProps {
    id: string;
    children: React.ReactNode[];
}

const CarouselItems: FunctionComponent<CarouselItemsProps> = (props: CarouselItemsProps) => (
    <div className="overflow-x-scroll lg:overflow-hidden space-x-4 flex" id={props.id} style={{ scrollBehavior: 'smooth' }}>
        {props.children}
    </div>
);

export default CarouselItems;