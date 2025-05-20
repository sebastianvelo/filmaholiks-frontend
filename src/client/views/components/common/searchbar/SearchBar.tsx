import { Search } from "@components/svg/Svg";
import Tailwind from "@tailwind-helper/Tailwind";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import PageRoute from "shared/routes/PageRoute";
import SearchBarInput from "./SearchBarInput";

export interface SearchBarProps {
    placeholder?: string;
    path?: PageRoute;
    hide?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, path, hide }) => {
    const [query, setQuery] = useState<string>("");
    const history = useHistory();

    if (hide) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!path) return;
        const target = `${path}`.replace(':query', query);
        history.push(target);
    };

    const className = Tailwind.builder()
        .add("fixed bottom-0 w-full h-max xl:top-16 z-40")
        .add("bg-white/50 dark:bg-black/50")
        .add("xl:mb-12")
        .build();

    return (
        <form onSubmit={handleSubmit} className={className}>
            <SearchBarInput query={query} setQuery={setQuery} placeholder={placeholder} />
        </form>
    );
};

export default SearchBar;
