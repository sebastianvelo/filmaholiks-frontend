import Input from "client/common/components/form/input/Input";
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
    return (
        <form onSubmit={handleSubmit} className={`flex items-center justify-center w-full md:pb-8 fixed md:relative bottom-0 z-50`}>
            <Input className="w-full xl:w-1/2" onChange={handleSearch} placeholder={props.placeholder}  />
        </form >
    );
}

export default SearchBar;