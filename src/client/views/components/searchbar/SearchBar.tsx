import Input from "client/common/components/form/input/Input";
import Tailwind from "client/common/tailwind/Tailwind";
import PageRoute from "shared/routes/PageRoute";
import { FunctionComponent, useState } from "react";
import { useHistory } from "react-router";

export interface SearchBarProps {
    placeholder?: string;
    path?: PageRoute;
    hide?: boolean;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ placeholder, path, hide }) => {
    const [query, setQuery] = useState<string>("");
    const history = useHistory();

    if (hide) return null;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!path) return;
        const target = `${path}`.replace(':query', query);
        history.push(target);
    };

    const className = Tailwind.builder()
        //.add("flex items-center justify-center w-full")
        //.add("fixed bottom-0 md:relative z-40")
        //.add("bg-white/50 dark:bg-black/50 backdrop-blur-md")
        .build();

    return (
        <form onSubmit={handleSubmit} className={className}>
            <Input className="w-full" onChange={handleSearch} placeholder={placeholder} />
        </form>
    );
};

export default SearchBar;
