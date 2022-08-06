import WatchlistPageRequest from "api/request/pages/WatchlistPageRequest";
import Input from "client/common/components/form/input/Input";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent, useState } from "react";
import { ItemProps } from "../actionable-item/item/Item";
import SearchResults from "./results/SearchResults";

interface SearchProps {
    addItem: (item: ItemProps) => void
    deleteItem: (listIdx: number, idx: number, requiresConfirmation?: boolean) => void;
}

const SearchItems: FunctionComponent<SearchProps> = (props: SearchProps) => {
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(WatchlistPageRequest.showsSuggestions(query));
    const response = useFetch<ItemProps[]>(url);

    const handleSearch = (value: string) => {
        setQuery(value);
        if (value.length > 3) {
            setUrl(WatchlistPageRequest.showsSuggestions(value));
        }
    };

    const addItem = (item: ItemProps) => {
        handleSearch('');
        props.addItem(item);
    };

    const deleteItem = (listIdx: number, idx: number, requiresConfirmation?: boolean) => {
        handleSearch('');
        props.deleteItem(listIdx, idx, requiresConfirmation);
    }

    return (
        <div className={`group relative w-96`}>
            <Input value={query} placeholder={`Add show`} onChange={(e) => handleSearch(e.target.value)} className="z-50" />
            <SearchResults items={response?.data} loading={response?.loading} addItem={addItem} deleteItem={deleteItem} />
        </div>
    );
}

export default SearchItems;