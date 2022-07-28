import Carousel from "client/common/components/carousel/Carousel";
import useColumns from "client/hooks/useColumns";
import { FunctionComponent } from "react";
import AddColumnButton from "./add-column-button/AddColumnButton";
import { ItemProps } from "./column/actionable-item/item/Item";
import Column, { ColumnProps } from "./column/Column";

interface ColumnsProps {
    columns: ColumnProps[];
}

const Columns: FunctionComponent<ColumnsProps> = (props: ColumnsProps) => {
    const service = useColumns(props.columns);

    return (
        <>
            <AddColumnButton columns={service.columns.value} addColumn={service.columns.add} />
            <Carousel id="watchlist">
                {service.columns.value?.map((column, idx: number) => (
                    <Column {...column}
                        idx={idx}
                        swap={(target: number) => service.columns.swap(idx, target)}
                        deleteColumn={() => service.columns.delete(idx)}
                        addCard={(item: ItemProps) => service.cards.add(idx, item)}
                        changeTitle={(title: string) => service.columns.changeTitle(idx, title)}
                        deleteCard={(cardIdx: number, requiresConfirmation?: boolean) => service.cards.delete(!!requiresConfirmation, idx, cardIdx)}
                    />
                ))}
            </Carousel>
        </>
    );
}

export default Columns;