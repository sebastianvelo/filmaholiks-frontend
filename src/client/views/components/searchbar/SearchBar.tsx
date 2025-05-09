import { Search } from "client/common/components/svg/Svg";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent, useRef, useState } from "react";
import { useHistory } from "react-router";
import PageRoute from "shared/routes/PageRoute";

export interface SearchBarProps {
    placeholder?: string;
    path?: PageRoute;
    hide?: boolean;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ placeholder, path, hide }) => {
    const [query, setQuery] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    if (hide) return null;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!path) return;
        const target = `${path}`.replace(':query', query);
        history.push(target);
    };

    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';

            const event = new Event('input', { bubbles: true });
            inputRef.current.dispatchEvent(event);
            /*
            if (props.onClear) {
              props.onClear();
            }*/

            inputRef.current.focus();
        }
    };

    const showClearButton = query && query.length > 0;

    const className = Tailwind.builder()
        //.add("flex items-center justify-center w-full")
        .add("fixed bottom-0 w-full h-max xl:top-16 z-40")
        .add("bg-white/50 dark:bg-black/50")
        .build();

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="relative w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-lg blur opacity-20 group-hover:opacity-30 group-focus-within:opacity-75 transition duration-300"></div>

                <div className="group relative flex items-center w-full rounded-lg backdrop-blur-lg bg-white/80 dark:bg-black/70 focus-within:bg-white/10 dark:focus-within:bg-black/30 hover:bg-white/10 dark:hover:bg-black/25 transition-all duration-300 border border-white/10 dark:border-tertiary-700/30 focus-within:border-secondary-500/50 dark:focus-within:border-primary-500/50 shadow-lg overflow-hidden">
                    <div className="flex items-center justify-center h-full pl-4">
                        <Search />
                    </div>

                    <input
                        ref={inputRef}
                        type={"text"}
                        value={query}
                        placeholder={placeholder || "Buscar..."}
                        onChange={handleSearch}
                        className={`w-full py-3 px-3 bg-transparent text-white dark:text-tertiary-100 placeholder-tertiary-500 dark:placeholder-tertiary-500 focus:outline-none text-base md:text-lg`}
                        spellCheck="false"
                        autoComplete="off"
                    />

                    {showClearButton && (
                        <button
                            onClick={handleClear}
                            className="flex items-center justify-center h-full px-4 text-tertiary-400 hover:text-white dark:hover:text-tertiary-300 transition-colors duration-200"
                            type="button"
                            aria-label="Limpiar búsqueda"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                <div className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary-500 dark:via-primary-500 to-transparent opacity-0 group-focus-within:opacity-50 transition-opacity duration-300"></div>
            </div>
        </form>
    );
};

export default SearchBar;
