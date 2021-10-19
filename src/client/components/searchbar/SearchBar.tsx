import Action from "client/common/components/action/Action";
import Input from "client/common/components/form/input/Input";
import { SearchSvg } from "client/common/components/svg/Svg";
import PageRoute from "client/routes/PageRoute";
import { FunctionComponent, useState } from "react";

interface SearchBarProps {
    placeholder: string;
    path: PageRoute;
}

const SearchBar: FunctionComponent<SearchBarProps> = (props: SearchBarProps) => {
    const [query, setQuery] = useState<string>('');
    const handleSearch = (e: any) => { setQuery(e.target.value); };
    const path = `${props.path}`.replace(`:query`, query);
    return (
        <div className={`flex`}>
            <Input placeholder={props.placeholder} onChange={handleSearch} />
            <Action path={path} className={`bg-dark hover:bg-dark-light`}>
                <SearchSvg />
            </Action>
        </div>
    );
}

export default SearchBar;