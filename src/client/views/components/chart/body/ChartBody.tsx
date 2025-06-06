import { ChartBodyModel } from "@model/components/ChartModel";
import { useState } from "react";
import ChartHeaderCell from "../header/ChartHeaderCell";
import ChartBodyCell from "./ChartBodyCell";

const initialValues = (props: ChartBodyProps): boolean[][] =>
    props.ratings.map((column => Array(column.length).fill(false))) ?? [];

export interface ChartBodyProps extends ChartBodyModel { }

const ChartBody: React.FC<ChartBodyProps> = (props: ChartBodyProps) => {
    const [opened, setOpen] = useState<boolean[][]>(initialValues(props));

    const toggle = (columnIdx: number, cellIdx: number) => {
        const value = opened[columnIdx][cellIdx];
        const temp = initialValues(props);
        temp[columnIdx][cellIdx] = !value;
        setOpen([...temp]);
    };
    return (
        <div className="flex scrollbar">
            <div className="flex flex-col w-16 flex-shrink-0">
                {props.episode.map((value) => <ChartHeaderCell key={`chart-header-s-${value}`} value={value} />)}
            </div>
            {props.ratings.map((column, columnIdx) => (
                <div key={`column-${columnIdx}`} className="flex flex-col w-16 flex-shrink-0">
                    {column.map((cell, cellIdx) =>
                        <ChartBodyCell
                            key={`chart-body-${cell.title}`}
                            {...cell}
                            isTopHalf={cellIdx < 4 || cellIdx <= column.length / 2}
                            isLeftHalf={columnIdx < 5 || columnIdx <= props.ratings.length / 2}
                            isOpened={opened[columnIdx][cellIdx]}
                            toggle={() => toggle(columnIdx, cellIdx)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default ChartBody;
