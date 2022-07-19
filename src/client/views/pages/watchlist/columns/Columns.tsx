import { FunctionComponent, useState } from "react";
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

    const addColumn = () => {
        const dummyColumn: any = {
            title: `Column ${columns.length + 1}`,
            items: []
        };
        updateColumns([...columns, dummyColumn]);
    }

    const addCard = (columnIdx: number, item: ItemProps) => {
        const column = columns[columnIdx];
        column.items.push(item);
        columns[columnIdx] = column;
        updateColumns([...columns]);
    }

    const changeTitle = (columnIdx: number, title: string) => {
        const column = columns[columnIdx];
        column.title = title;
        columns[columnIdx] = column;
        updateColumns([...columns]);
    }

    return (
        <>
            <AddColumnButton columns={columns} addColumn={addColumn} />
            <div className="flex space-x-4 overflow-x-auto w-full pb-8">
                {columns?.map((column, idx: number) => (
                    <Column {...column}
                        addCard={(item: ItemProps) => addCard(idx, item)}
                        changeTitle={(title: string) => changeTitle(idx, title)}
                    />
                ))}
            </div>
        </>
    );
}

export default Columns;