import BodyCell from "../cell/BodyCell";

export interface RowProps {
    cells: string[];
}

const Row: React.FC<RowProps> = (props: RowProps) => (
        <tr>
            {props.cells.map((cell) => <BodyCell text={cell} />)}
        </tr>
    )

export default Row;