export interface ListTitleProps {
    title?: string;
    changeListTitle: (title: string) => void;
    dynamic?: boolean;
}

const ListTitle: React.FC<ListTitleProps> = (props: ListTitleProps) =>
    props.dynamic ?
        (
            <input
                className="bg-transparent hover:bg-white/50 dark:hover:bg-white/70 text-lg focus:outline-none cursor-text w-full p-2 rounded-md font-bold"
                spellCheck="false"
                type="text"
                name={props.title}
                value={props.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.changeListTitle(e.target.value)}
            />
        ) :
        (
            <p className="bg-transparent text-lg focus:outline-none cursor-text w-64 truncate p-2">
                {props.title}
            </p>
        )


export default ListTitle;