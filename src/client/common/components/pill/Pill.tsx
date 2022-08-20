import { FunctionComponent } from "react";
import ComponentColor from "client/common/tailwind/constants/ComponentColor";
import Tailwind from "client/common/tailwind/Tailwind";

export interface PillProps {
    label?: string;
    className?: string;
    color?: ComponentColor;
}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => {
    const className = Tailwind.builder()
        .add('py-1 px-2 shadow-md rounded-sm font-semibold mr-2 w-max')
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