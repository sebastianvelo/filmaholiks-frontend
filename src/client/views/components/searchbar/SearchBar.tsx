import Action from "client/common/components/action/Action";
import Input from "client/common/components/form/input/Input";
import { SearchSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
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
        <form onSubmit={handleSubmit} className={`flex w-screen`}>
            <Input placeholder={props.placeholder} onChange={handleSearch} />
            {query && (
                <Action onClick={handleSubmit} color={ComponentHovereableColor.SUCCESS} revert className={`px-4 py-2 xl:mr-4`}>
                    <SearchSvg />
                </Action>
            )}
        </form >
    );
}

export default SearchBar;