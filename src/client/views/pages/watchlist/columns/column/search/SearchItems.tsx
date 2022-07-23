import WatchlistPageRequest from "api/request/pages/WatchlistPageRequest";
import Input from "client/common/components/form/input/Input";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent, useState } from "react";
import { ItemProps } from "../item/Item";
import SearchResults from "./results/SearchResults";

interface SearchProps {
    addCard: (item: ItemProps) => void
}

const SearchItems: FunctionComponent<SearchProps> = (props: SearchProps) => {
    const [url, setUrl] = useState(WatchlistPageRequest.showsSuggestions(''));
    const response = useFetch<ItemProps[]>(url);

    const handleSearch = (e: any) => {
        if (e.target.value.length > 3) {
            setUrl(WatchlistPageRequest.showsSuggestions(e.target.value));
        }
    };

    return (
        <div className={`group h-full relative`}>
            <Input placeholder={`Add show`} onChange={handleSearch} />
            <SearchResults items={response?.data} loading={response?.loading} addCard={props.addCard} />
        </div>
    );
}

export default SearchItems;