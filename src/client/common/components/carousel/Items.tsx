import { FunctionComponent } from "react";

export interface ItemsProps {
    id: string;
    children: React.ReactNode | React.ReactNode[];
}

const Items: FunctionComponent<ItemsProps> = (props: ItemsProps) => (
        <div className="overflow-x-scroll lg:overflow-hidden space-x-6 flex py-6 px-4" id={props.id} style={{ scrollBehavior: 'smooth' }}>
            {props.children}
        </div>
    )

export default Items;