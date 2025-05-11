export interface ListTitleProps {
    title?: string;
    changeListTitle: (title: string) => void;
    dynamic?: boolean;
}

const ListTitle: React.FC<ListTitleProps> = (props: ListTitleProps) =>
    props.dynamic ?
        (
            <input
                className="bg-transparent text-lg focus:outline-none cursor-text w-full p-4"
                spellCheck="false"
                type="text"
                name={props.title}
                value={props.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.changeListTitle(e.target.value)}
            />
        ) :
        (
            <p className="bg-transparent text-lg focus:outline-none cursor-text w-64 truncate p-4">
                {props.title}
            </p>
        )


export default ListTitle;