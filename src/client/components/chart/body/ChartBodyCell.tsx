import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface ChartBodyCellProps {
    value: number;
}

const ChartBodyCell: FunctionComponent<ChartBodyCellProps> = (props: ChartBodyCellProps) => {
    const valueRounded = Math.floor(props.value);
    const className = Tailwind.builder()
        .addIf(`bg-red-600 text-dark`, valueRounded === 1)
        .addIf(`bg-red-500 text-dark`, valueRounded === 2)
        .addIf(`bg-red-400 text-dark`, valueRounded === 3)
        .addIf(`bg-yellow-500 text-dark`, valueRounded === 4)
        .addIf(`bg-yellow-400 text-dark`, valueRounded === 5)
        .addIf(`bg-yellow-300 text-dark`, valueRounded === 6)
        .addIf(`bg-green-200 text-dark`, valueRounded === 7)
        .addIf(`bg-green-300 text-dark`, valueRounded === 8)
        .addIf(`bg-green-400 text-dark`, valueRounded === 9)
        .addIf(`bg-green-500 text-dark`, valueRounded === 10)
        .add("p-2 w-full border border-dark")
        .build();
    return (
        <span className={className}>{props.value}</span>
    );
}

export default ChartBodyCell;
