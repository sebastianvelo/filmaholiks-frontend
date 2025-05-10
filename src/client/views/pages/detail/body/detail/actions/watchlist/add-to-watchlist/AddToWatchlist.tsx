import Action from "@atom/action/Action";
import Tailwind from "@tailwind-helper/Tailwind";
import { WatchlistColumnProps } from "client/views/components/watch-list/list/WatchlistColumn";
import { FunctionComponent, useState } from "react";

export interface AddToWatchlistProps {
    save: (listIdx: number) => void;
    lists: WatchlistColumnProps[];
}

const AddToWatchlist: FunctionComponent<AddToWatchlistProps> = (props: AddToWatchlistProps) => {
    const [opened, setOpen] = useState(false);
    const toggle = () => setOpen(!opened);

    const modalBase = "absolute z-50 top-1/2 right-16 w-64 transition-all duration-300 transform";
    const modalVisible = "opacity-100 scale-100 pointer-events-auto";
    const modalHidden = "opacity-0 scale-95 pointer-events-none";

    const modalClassName = `${modalBase} ${opened ? modalVisible : modalHidden}`;

    const triggerClassName = Tailwind.builder()
        .add("px-4 py-3")
        .add("bg-green-500/70 hover:bg-green-500/80 text-white font-medium rounded-lg backdrop-blur-md")
        .add("flex items-center gap-2 transition-all")
        .build();

    const actionClassName = Tailwind.builder()
        .add("px-4 py-3")
        .add("bg-black/70 hover:bg-black/80 dark:bg-white/10 dark:hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md")
        .add("flex items-center gap-2 transition-all")
        .build();

    return (
        <div className="relative">
            <Action label="+ Add" className={triggerClassName} revert onClick={toggle} />
            <div className={modalClassName} onClick={toggle}>
                <article className="bg-primary-50 dark:bg-black py-2 px-2 rounded-md space-y-8 overflow-y-auto bg-opacity-60">
                    <div className="flex flex-col space-y-2">
                        {props.lists.map((list, idx) => (
                            <Action key={list.title} onClick={() => props.save(idx)} className={`${actionClassName} text-sm`} label={list.title} />
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}

export default AddToWatchlist;
