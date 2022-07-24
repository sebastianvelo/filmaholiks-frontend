import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import ActionableItem from "./actionable-item/ActionableItem";
import { ItemProps } from "./item/Item";
import SearchItems from "./search/SearchItems";
import ColumnTitle from "./title/ColumnTitle";

export interface ColumnProps {
    idx: number;
    title?: string;
    items: ItemProps[];
    delete: () => void;
    swap: (target: number) => void;
    changeTitle: (title: string) => void;
    addCard: (item: ItemProps) => void;
    deleteCard: (idx: number, requiresConfirmation?: boolean) => void;
}

const Column: FunctionComponent<ColumnProps> = (props: ColumnProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        if (event.dataTransfer.getData("item")) {
            const data: ItemProps = JSON.parse(event.dataTransfer.getData("item"));
            props.addCard(data);
        } else if (event.dataTransfer.getData("column")) {
            const target: number = +event.dataTransfer.getData("column");
            props.swap(target);
        }
    };

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        e.dataTransfer.setData("column", `${props.idx}`);
    };

    return (
        <section draggable="true"  onDrop={onDrop} onDragStart={onDragStart} onDragOver={onDragOver} className="bg-gradient-to-b from-secondary-dark to-black rounded-sm h-5/6 shadow-2xl max-w-1/3 space-y-4 md:border-l md:border-r md:border-t-4">
            <div className="flex justify-between">
                <ColumnTitle title={props.title} changeTitle={props.changeTitle} />
                <Action className="w-8 h-6 font-bold rounded-bl-md" onClick={props.delete} label="X" color={ComponentHovereableColor.DANGER} revert />
            </div>
            <SearchItems addCard={props.addCard} />
            <div className="space-y-4 h-96 overflow-y-auto px-2 py-4 border-b border-t-2 border-primary">
                {props.items.map((item: ItemProps, idx: number) => (
                    <ActionableItem key={item.title + idx} item={item} action={(requiresConfirmation?: boolean) => props.deleteCard(idx, requiresConfirmation)} delete />
                ))}
            </div>
        </section>
    );
}

export default Column;