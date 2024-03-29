import Action from "client/common/atom/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
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

    return (
        <div className="relative">
            <Action label="+ Add" className="w-screen md:w-64" color={ComponentHovereableColor.SUCCESS} onClick={toggle} />
            <div className={modalClassName} onClick={toggle} >
                <article className="bg-primary-lighter dark:bg-black p-4 space-y-8 overflow-y-auto bg-opacity-60">
                    <div className="flex flex-col space-y-4">
                        {props.lists.map((list, idx) => (
                            <Action
                                onClick={() => props.save(idx)}
                                className="rounded-xl dark:bg-secondary dark:hover:bg-secondary-dark dark:text-light bg-primary-dark hover:bg-primary text-dark"
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