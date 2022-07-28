import { ItemProps } from "client/views/pages/watchlist/columns/column/actionable-item/item/Item";
import { ColumnProps } from "client/views/pages/watchlist/columns/column/Column";
import { useState } from "react";
import Swal, { SweetAlertResult } from 'sweetalert2';

const getColumnsFromLocalStorage = () => JSON.parse(localStorage.getItem("columns") || "[]");

const setColumnsInLocalStorage = (columns: ColumnProps[]) => localStorage.setItem("columns", JSON.stringify(columns));

const requireConfirmation = (config: { title: string, cback: (result: SweetAlertResult<any>) => void }) => {
    Swal.fire({
        title: config.title,
        showDenyButton: true,
        denyButtonText: `Delete`,
        confirmButtonText: 'Cancel',
    }).then(config.cback);
}

const useColumns = (apiColumns: ColumnProps[]) => {
    const [columns, setColumns] = useState<ColumnProps[]>(getColumnsFromLocalStorage().length ? getColumnsFromLocalStorage() : apiColumns);

    const updateColumns = (newColumns: ColumnProps[]) => {
        setColumns([...newColumns]);
        setColumnsInLocalStorage([...newColumns]);
    }

    const deleteColumn = (columnIdx: number) => {
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) updateColumns(columns.filter((_, idx) => idx !== columnIdx));
            }
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
        if (!requiresConfirmation) {
            removeCard(columnIdx, itemIdx);
            return;
        }
        requireConfirmation({
            title: 'Are you sure?',
            cback: (result) => {
                if (!result.isConfirmed) {
                    removeCard(columnIdx, itemIdx);
                    Swal.fire('Deleted!', '', 'success')
                };
            }
        });
    }

    const changeTitle = (columnIdx: number, title: string) => {
        const column = columns[columnIdx];
        column.title = title;
        columns[columnIdx] = column;
        updateColumns([...columns]);
    }

    return {
        columns: {
            value: columns,
            changeTitle,
            swap: swapColumns,
            add: addColumn,
            delete: deleteColumn
        },
        cards: {
            delete: deleteCard,
            add: addCard,
        }
    };
};

export default useColumns;
