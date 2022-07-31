import Action from "client/common/components/action/Action";
import Headline from "client/common/components/headline/Headline";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
import { getColumnsFromLocalStorage, saveCardInLocalStorage } from "client/hooks/useColumns";
import { ItemProps } from "client/views/pages/watchlist/columns/column/actionable-item/item/Item";
import { ColumnProps } from "client/views/pages/watchlist/columns/column/Column";
import { FunctionComponent, useState } from "react";

export interface AddToWatchlistProps extends ItemProps { }

const AddToWatchlist: FunctionComponent<AddToWatchlistProps> = (props: AddToWatchlistProps) => {
    const [opened, setOpen] = useState(false);
    const toggle = () => setOpen(!opened);
    const columns: ColumnProps[] = getColumnsFromLocalStorage();
    const modalClassName = Tailwind.builder()
        .add("fixed place-items-center w-screen h-screen top-0 left-0 bg-black bg-opacity-70 z-50 transition-colors duration-1000")
        .addIf("grid", opened)
        .addIf("hidden bg-opacity-0", !opened)
        .build();

    return (
        <div>
            <Action label="Add to watchlist" className="w-full" color={ComponentHovereableColor.SUCCESS} onClick={toggle} />
            <div className={modalClassName} onClick={toggle} >
                <article className="bg-gradient-to-b from-secondary-dark to-black rounded-tl-xl rounded-bl-xl shadow-lg w-screen h-screen md:w-1/2 md:h-1/2 text-black p-4 space-y-8">
                    <Headline className="text-5xl">My lists</Headline>
                    <div className="flex flex-col space-y-8">
                        {columns.map((column, idx) => <Action onClick={() => saveCardInLocalStorage(idx, props)} className={ComponentHovereableColor.SECONDARY} label={column.title} />)}
                    </div>
                </article>
            </div>
        </div>
    );
}

export default AddToWatchlist;