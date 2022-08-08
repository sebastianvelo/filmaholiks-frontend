import Action from "client/common/components/action/Action";
import Headline from "client/common/components/headline/Headline";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";
import { ListProps } from "client/views/pages/watchlist/lists/list/List";
import { FunctionComponent, useState } from "react";

export interface AddToWatchlistProps {
    item: ItemProps;
    save: (listIdx: number, item: ItemProps) => void;
    lists: ListProps[];
}

const AddToWatchlist: FunctionComponent<AddToWatchlistProps> = (props: AddToWatchlistProps) => {
    const [opened, setOpen] = useState(false);
    const toggle = () => setOpen(!opened);
    
    const modalClassName = Tailwind.builder()
        .add("fixed place-items-center w-screen h-screen top-0 left-0 bg-black bg-opacity-70 z-50 transition-opacity duration-1000")
        .addIf("grid", opened)
        .addIf("hidden bg-opacity-0", !opened)
        .build();

    return (
        <div>
            <Action label="+ Add" className="w-screen md:w-64" color={ComponentHovereableColor.SUCCESS} onClick={toggle} />
            <div className={modalClassName} onClick={toggle} >
                <article className="bg-gradient-to-b from-secondary-dark to-black rounded-tl-xl rounded-bl-xl shadow-lg w-screen h-screen md:w-1/2 md:h-1/2 text-black p-4 space-y-8 overflow-y-auto">
                    <Headline className="text-5xl">Add to list</Headline>
                    <div className="flex flex-col space-y-8">
                        {props.lists.map((list, idx) => (
                            <Action
                                onClick={() => props.save(idx, props.item)}
                                className={ComponentHovereableColor.SECONDARY}
                                label={list.title}
                            />
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}

export default AddToWatchlist;