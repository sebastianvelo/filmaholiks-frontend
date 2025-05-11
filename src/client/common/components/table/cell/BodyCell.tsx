interface BodyCellProps {
    text: string;
}
 
const BodyCell: React.FC<BodyCellProps> = (props: BodyCellProps) => ( 
        <td>
            {props.text}
        </td>
     )
 
export default BodyCell;