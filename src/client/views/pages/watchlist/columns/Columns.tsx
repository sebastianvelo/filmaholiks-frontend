import { FunctionComponent, useState } from "react";
import Swal from 'sweetalert2'
import AddColumnButton from "./add-column-button/AddColumnButton";
import Column, { ColumnProps } from "./column/Column";
import { ItemProps } from "./column/item/Item";

const getColumnsFromLocalStorage = () => JSON.parse(localStorage.getItem("columns") || "[]")
const setColumnsInLocalStorage = (columns: ColumnProps[]) => localStorage.setItem("columns", JSON.stringify(columns));

interface ColumnsProps {
    columns?: ColumnProps[];
}

const Columns: FunctionComponent<ColumnsProps> = () => {
    const [columns, setColumns] = useState<ColumnProps[]>(getColumnsFromLocalStorage());

    if (!columns) return <></>;

    const updateColumns = (newColumns: ColumnProps[]) => {
        setColumns([...newColumns]);
        setColumnsInLocalStorage([...newColumns]);
    }

    const removeColumn = (columnIdx: number) => {
        Swal.fire({
            title: 'Ara you sure?',
            showDenyButton: true,
            denyButtonText: `Delete`,
            confirmButtonText: 'Cancel',
        }).then(result => {
            if (!result.isConfirmed) updateColumns(columns.filter((_, idx) => idx !== columnIdx));
        });
    }

    const addColumn = () => {
        const dummyColumn: any = {
            title: `Category ${columns.length + 1}`,
            items: []
        };
        updateColumns([...columns, dummyColumn]);
    }

    const swapColumns = (idxA: number, idxB: number) => {
        const columnA = columns[idxA];
        const columnB = columns[idxB];
        columns[idxB] = columnA;
        columns[idxA] = columnB;
        updateColumns([...columns]);
    }

    const addCard = (columnIdx: number, item: ItemProps) => {
        columns[columnIdx].items.push(item);
        updateColumns([...columns]);
    }

    const removeCard = (columnIdx: number, itemIdx: number) => {
        columns[columnIdx].items = columns[columnIdx].items.filter((_, idx) => idx !== itemIdx);
        updateColumns([...columns]);
    }

    const deleteCard = (requiresConfirmation: boolean, columnIdx: number, itemIdx: number) => {
        if (requiresConfirmation) {
            Swal.fire({
                title: 'Ara you sure?',
                showDenyButton: true,
                denyButtonText: `Delete`,
                confirmButtonText: 'Cancel',
            }).then(result => {
                if (!result.isConfirmed) {
                    removeCard(columnIdx, itemIdx);
                    Swal.fire('Deleted!', '', 'success')
                }
            });
            return;
        }
        removeCard(columnIdx, itemIdx);
    }

    const changeTitle = (columnIdx: number, title: string) => {
        const column = columns[columnIdx];
        column.title = title;
        columns[columnIdx] = column;
        updateColumns([...columns]);
    }

    return (
        <>
            <div className="flex space-x-4 overflow-x-auto w-full py-8">
                {columns?.map((column, idx: number) => (
                    <Column {...column}
                        idx={idx}
                        swap={(target: number) => swapColumns(idx, target)}
                        delete={() => removeColumn(idx)}
                        addCard={(item: ItemProps) => addCard(idx, item)}
                        changeTitle={(title: string) => changeTitle(idx, title)}
                        deleteCard={(cardIdx: number, requiresConfirmation?: boolean) => deleteCard(!!requiresConfirmation, idx, cardIdx)}
                    />
                ))}
            </div>
            <AddColumnButton columns={columns} addColumn={addColumn} />
        </>
    );
}

export default Columns;