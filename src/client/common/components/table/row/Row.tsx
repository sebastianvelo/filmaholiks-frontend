import { FunctionComponent } from "react";
import BodyCell from "../cell/BodyCell";

export interface RowProps {
    cells: string[];
}

const Row: FunctionComponent<RowProps> = (props: RowProps) => {
    return (
        <tr>
            {props.cells.map((cell) => <BodyCell text={cell} />)}
        </tr>
    );
}

export default Row;