import { FunctionComponent } from "react";

export interface ListTitleProps {
    title?: string;
    changeListTitle: (title: string) => void;
    dynamicItems: boolean;
}

const ListTitle: FunctionComponent<ListTitleProps> = (props: ListTitleProps) =>
    props.dynamicItems ?
        (
            <input
                className="bg-transparent text-2xl font-black focus:outline-none cursor-text w-full p-4"
                spellCheck="false"
                type="text"
                name={props.title}
                value={props.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.changeListTitle(e.target.value)}
            />
        ) :
        (
            <p className="bg-transparent text-2xl font-black focus:outline-none cursor-text w-full truncate p-4">
                {props.title}
            </p>
        )


export default ListTitle;