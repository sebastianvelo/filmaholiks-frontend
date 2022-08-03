import { FunctionComponent, useState } from "react";
import ChartHeaderCell from "../header/ChartHeaderCell";
import ChartBodyCell, { ChartBodyCellProps } from "./ChartBodyCell";

const initialValues = (props: ChartBodyProps): boolean[][] =>
    props.body?.ratings.map((column => Array(column.length).fill(false))) ?? [];

export interface ChartBodyProps {
    body?: {
        episode: string[];
        ratings: ChartBodyCellProps[][];
    };
}

const ChartBody: FunctionComponent<ChartBodyProps> = (props: ChartBodyProps) => {
    const [opened, setOpen] = useState<boolean[][]>(initialValues(props));
    const toggle = (columnIdx: number, cellIdx: number) => {
        const value = opened[columnIdx][cellIdx];
        const temp = initialValues(props);
        temp[columnIdx][cellIdx] = !value;
        setOpen([...temp]);
    };
    return (
        <div className="flex">
            <div className="flex flex-col w-16 flex-shrink-0">
                {props.body?.episode.map((value) => <ChartHeaderCell value={value} />)}
            </div>
            {props.body?.ratings.map((column, columnIdx) => (
                <div className="flex flex-col w-16 flex-shrink-0">
                    {column.map((cell, cellIdx) =>
                        <ChartBodyCell
                            {...cell}
                            isTopHalf={cellIdx < 4 || cellIdx <= column.length / 2}
                            isLeftHalf={columnIdx < 5 || columnIdx <= props.body!.ratings.length / 2}
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
