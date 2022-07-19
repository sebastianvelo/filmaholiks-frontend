import { FunctionComponent } from "react";
import Item, { ItemProps } from "./item/Item";
import Search from "./search/Search";
import ColumnTitle from "./title/ColumnTitle";

export interface ColumnProps {
    title?: string;
    items: ItemProps[];
    addCard: (item: ItemProps) => void;
    changeTitle: (title: string) => void;
}

const Column: FunctionComponent<ColumnProps> = (props: ColumnProps) => (
    <section className="bg-gradient-to-bl from-secondary to-secondary-dark px-2 py-4 rounded-lg space-y-4 h-5/6 shadow-2xl">
        <ColumnTitle title={props.title} changeTitle={props.changeTitle} />
        <Search addCard={props.addCard} />
        <div className="space-y-4 h-96 overflow-y-auto">
            {props.items.map((item: any) => <Item {...item} />)}
        </div>
    </section>
);

export default Column;