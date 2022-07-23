import { FunctionComponent, useState } from "react";
import swal from 'sweetalert';
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
        swal("Are you sure?", {
            buttons: {
                cancel: true,
                confirm: true,
            },
        }).then(confirm => {
            if (confirm) updateColumns(columns.filter((_, idx) => idx !== columnIdx));
        });
    }

    const addColumn = () => {
        const dummyColumn: any = {
            title: `Category ${columns.length + 1}`,
            items: []
        };
        updateColumns([...columns, dummyColumn]);
    }

    const addCard = (columnIdx: number, item: ItemProps) => {
        columns[columnIdx].items.push(item);
        updateColumns([...columns]);
    }

    const deleteCard = (columnIdx: number, itemIdx: number) => {
        swal("Are you sure?", {
            buttons: {
                cancel: true,
                confirm: true,
            },
        }).then(confirm => {
            if (confirm) {
                columns[columnIdx].items = columns[columnIdx].items.filter((_, idx) => idx !== itemIdx);
                updateColumns([...columns]);
            }
        });
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
                        delete={() => removeColumn(idx)}
                        addCard={(item: ItemProps) => addCard(idx, item)}
                        changeTitle={(title: string) => changeTitle(idx, title)}
                        deleteCard={(cardIdx: number) => deleteCard(idx, cardIdx)}
                    />
                ))}
            </div>
            <AddColumnButton columns={columns} addColumn={addColumn} />
        </>
    );
}

export default Columns;