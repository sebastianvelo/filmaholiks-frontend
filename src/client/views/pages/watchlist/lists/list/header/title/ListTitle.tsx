import { FunctionComponent } from "react";

interface ListTitleProps {
    title?: string;
    changeTitle: (title: string) => void;
}

const ListTitle: FunctionComponent<ListTitleProps> = (props: ListTitleProps) =>
    <input
        className="bg-transparent text-2xl font-black focus:outline-none cursor-text w-96 py-1 px-4"
        spellCheck="false"
        type="text"
        name={props.title}
        value={props.title}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => props.changeTitle(e.target.value)}
    />

export default ListTitle;