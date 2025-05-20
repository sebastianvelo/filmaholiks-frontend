import { Search } from "@components/svg/Svg";

export interface SearchBarInputProps {
    placeholder?: string;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarInput: React.FC<SearchBarInputProps> = ({ placeholder, query, setQuery }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    return (
        <div className="relative w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-lg blur opacity-20 group-hover:opacity-30 group-focus-within:opacity-75 transition duration-200"></div>
            <div className="group relative flex items-center w-full backdrop-blur-lg bg-white/90 dark:bg-black/90 focus-within:bg-white/10 dark:focus-within:bg-black/30 hover:bg-white/10 dark:hover:bg-black/25 transition-all duration-200 border-b border-white/10 dark:border-tertiary-700/30 focus-within:border-secondary-500/50 dark:focus-within:border-primary-500/50 shadow-lg overflow-hidden">
                <div className="flex items-center justify-center h-full pl-4">
                    <Search />
                </div>

                <input
                    type={"text"}
                    value={query}
                    placeholder={placeholder || "Buscar..."}
                    onChange={handleSearch}
                    className={`w-full py-3 px-3 bg-transparent text-tertiary-900 dark:text-tertiary-100 placeholder-tertiary-500 dark:placeholder-tertiary-500 focus:outline-none text-base md:text-lg`}
                    spellCheck="false"
                    autoComplete="off"
                />
            </div>

            <div className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary-500 dark:via-primary-500 to-transparent opacity-0 group-focus-within:opacity-50 transition-opacity duration-200"></div>
        </div>
    );
};

export default SearchBarInput;
