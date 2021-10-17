import { FunctionComponent } from "react";
import ComponentColor from "@client/tailwind/constants/ComponentColor";
import TailwindClass from "@client/tailwind/TailwindClass";

export interface PillProps {
    label?: string;
    className?: string;
    color?: ComponentColor;
}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => {
    const className = TailwindClass.builder()
        .add('py-2 px-4 shadow-md rounded-full font-semibold text-sm mr-2 w-max')
        .add(props.color)
        .add(props.className)
        .build()
    return (
        <div className={className}>
            {props.label}
        </div>
    );
}

export default Pill;