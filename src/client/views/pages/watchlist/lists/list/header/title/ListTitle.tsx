import { FunctionComponent } from "react";

interface ListTitleProps {
    title?: string;
    changeTitle: (title: string) => void;
}

const ListTitle: FunctionComponent<ListTitleProps> = (props: ListTitleProps) =>
    <input
        className="bg-transparent text-4xl font-black text-light pl-4 py-2 focus:outline-none cursor-text w-96"
        spellCheck="false"
        type="text"
        name={props.title}
        value={props.title}
        onChange={(e) => props.changeTitle(e.target.value)}
    />

export default ListTitle;