import { FunctionComponent } from "react";

interface ColumnTitleProps {
    title?: string;
    changeTitle: (title: string) => void;
}

const ColumnTitle: FunctionComponent<ColumnTitleProps> = (props: ColumnTitleProps) =>
    <input
        className="bg-transparent text-3xl font-black text-primary pl-4 py-2"
        spellCheck="false"
        type="text"
        name={props.title}
        value={props.title}
        onChange={(e) => props.changeTitle(e.target.value)}
    />

export default ColumnTitle;