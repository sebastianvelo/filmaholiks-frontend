import Input from "client/common/components/form/input/Input";
import Tailwind from "client/common/tailwind/Tailwind";
import PageRoute from "client/routes/PageRoute";
import { FunctionComponent, useState } from "react";
import { useHistory } from "react-router";

export interface SearchBarProps {
    placeholder?: string;
    path?: PageRoute;
}

const SearchBar: FunctionComponent<SearchBarProps> = (props: SearchBarProps) => {
    const [query, setQuery] = useState<string>('');
    const history = useHistory();
    const handleSearch = (e: any) => { setQuery(e.target.value); };
    const handleSubmit = () => {
        const path = `${props.path}`.replace(`:query`, query);
        history.push(path);
    }

    const className = Tailwind.builder()
    .add("flex items-center justify-center w-full")
    .add("fixed bottom-0 z-40")
    .add("bg-secondary-lighter bg-opacity-50 dark:bg-secondary-dark backdrop-filter backdrop-blur-md dark:bg-opacity-50")
    .build();

    return (
        <form onSubmit={handleSubmit} className={className}>
            <Input className="w-full xl:w-1/3" onChange={handleSearch} placeholder={props.placeholder}  />
        </form >
    );
}

export default SearchBar;