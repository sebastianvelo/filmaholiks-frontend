import ComponentColor from "@tailwind-helper/constants/ComponentColor";
import Tailwind from "@tailwind-helper/Tailwind";

export interface PillProps {
    label?: string;
    className?: string;
    color?: ComponentColor;
}

const Pill: React.FC<PillProps> = (props: PillProps) => {
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