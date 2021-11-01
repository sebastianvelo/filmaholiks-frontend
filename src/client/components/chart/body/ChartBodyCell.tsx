import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface ChartBodyCellProps {
    value: number;
}

const ChartBodyCell: FunctionComponent<ChartBodyCellProps> = (props: ChartBodyCellProps) => {
    const rounded = Math.floor(props.value);
    const className = Tailwind.builder()
        .addIf(`bg-red-600 text-dark`, rounded === 1)
        .addIf(`bg-red-500 text-dark`, rounded === 2)
        .addIf(`bg-red-400 text-dark`, rounded === 3)
        .addIf(`bg-yellow-500 text-dark`, rounded === 4)
        .addIf(`bg-yellow-400 text-dark`, rounded === 5)
        .addIf(`bg-yellow-300 text-dark`, rounded === 6)
        .addIf(`bg-green-200 text-dark`, rounded === 7)
        .addIf(`bg-green-300 text-dark`, rounded === 8)
        .addIf(`bg-green-400 text-dark`, rounded === 9)
        .addIf(`bg-green-500 text-dark`, rounded === 10)
        .add("p-2 w-full border border-dark")
        .build();
    return (
        <span className={className}> {props.value}</span>
    );
}

export default ChartBodyCell;
