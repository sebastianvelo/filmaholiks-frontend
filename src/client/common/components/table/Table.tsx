import { FunctionComponent } from "react";
import Row from "./row/Row";

interface TableProps {
    columns: string[];
    rows: string[][];
}

const Table: FunctionComponent<TableProps> = (props: TableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    {props.columns.map(column => <th>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.rows.map(row => <Row cells={row} />)}
            </tbody>
        </table>
    );
}

export default Table;