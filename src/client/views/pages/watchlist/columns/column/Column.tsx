import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import Item, { ItemProps } from "./item/Item";
import SearchSuggestions from "./search/SearchSuggestions";
import ColumnTitle from "./title/ColumnTitle";

export interface ColumnProps {
    title?: string;
    items: ItemProps[];
    delete: () => void;
    changeTitle: (title: string) => void;
    addCard: (item: ItemProps) => void;
    deleteCard: (idx: number) => void;
}

const Column: FunctionComponent<ColumnProps> = (props: ColumnProps) => (
    <section className="bg-gradient-to-b from-secondary-dark to-black rounded-sm h-5/6 shadow-2xl max-w-1/3">
        <div className="flex items-start">
            <ColumnTitle title={props.title} changeTitle={props.changeTitle} />
            <Action className="w-8 h-6 font-bold rounded-bl-md" onClick={props.delete} label="X" color={ComponentHovereableColor.DANGER} revert />
        </div>
        <SearchSuggestions addCard={props.addCard} />
        <div className="space-y-2 h-96 overflow-y-auto px-2 py-4 border-primary-dark">
            {props.items.map((item: ItemProps, idx: number) => (
                <div className="flex">
                    <Item {...item} />
                    <Action onClick={() => props.deleteCard(idx)} label="x" color={ComponentHovereableColor.DANGER} className="rounded-tr-xl rounded-br-xl" />
                </div>
            ))}
        </div>
    </section>
);

export default Column;