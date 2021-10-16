import { FunctionComponent } from "react";
import ComponentClass from "style/ComponentClass";
import ComponentColor from "style/tailwind/constants/ComponentColor";

export interface PillProps {
    label?: string;
    className?: string;
    color?: ComponentColor;
}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => {
    return (
        <div className={ComponentClass.PILL(props)}>
            {props.label}
        </div>
    );
}

export default Pill;