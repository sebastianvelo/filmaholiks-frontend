import Action from "@atom/action/Action";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent, useState } from "react";
import { ListProps } from "../../../../../../../components/watch-list/list/List";

export interface AddToWatchlistProps {
    save: (listIdx: number) => void;
    lists: ListProps[];
}

const AddToWatchlist: FunctionComponent<AddToWatchlistProps> = (props: AddToWatchlistProps) => {
    const [opened, setOpen] = useState(false);
    const toggle = () => setOpen(!opened);

    const modalClassName = Tailwind.builder()
        .add("absolute z-50 top-8 left-32 w-96")
        .addIf("grid", opened)
        .addIf("hidden", !opened)
        .build();

    const actionClassName = Tailwind.builder()
        .add("px-6 py-3")
        .add("bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md")
        .add("flex items-center gap-2 transition-all")
        .build();

    return (
        <div className="relative">
            <Action label="+ Add" className={actionClassName} revert color={ComponentHovereableColor.SUCCESS} onClick={toggle} />
            <div className={modalClassName} onClick={toggle} >
                <article className="bg-primary-50 dark:bg-black p-4 space-y-8 overflow-y-auto bg-opacity-60">
                    <div className="flex flex-col space-y-4">
                        {props.lists.map((list, idx) => (
                            <Action key={list.title} onClick={() => props.save(idx)} className={actionClassName} label={list.title} />
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}

export default AddToWatchlist;