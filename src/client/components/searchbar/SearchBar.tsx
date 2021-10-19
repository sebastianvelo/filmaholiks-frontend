import Action from "client/common/components/action/Action";
import Input from "client/common/components/form/input/Input";
import { SearchSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import PageRoute from "client/routes/PageRoute";
import { FunctionComponent, useState } from "react";

export interface SearchBarProps {
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
            <Action path={path} color={ComponentHovereableColor.DARK}>
                <SearchSvg />
            </Action>
        </div>
    );
}

export default SearchBar;