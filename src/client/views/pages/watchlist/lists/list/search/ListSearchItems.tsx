import WatchlistPageRequest from "api/request/pages/WatchlistPageRequest";
import Tailwind from "client/common/tailwind/Tailwind";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent, useState } from "react";
import { ItemProps } from "../actionable-item/item/Item";
import ListSearchResults from "./results/ListSearchResults";

interface ListSearchItemsProps {
    addItem: (item: ItemProps) => void
    deleteItem: (listIdx: number, idx: number, requiresConfirmation?: boolean) => void;
}

const ListSearchItems: FunctionComponent<ListSearchItemsProps> = (props: ListSearchItemsProps) => {
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

    const className = Tailwind.builder()
        .add('bg-black placeholder-opacity-50 placeholder-light p-4 w-full transition-color duration-500 cursor-pointer')
        .add('focus:outline-none focus:border-light focus:border-2 border-primary-dark')
        .build();

    return (
        <form className={`group relative w-full`}>
            <input className={className} value={query} placeholder={`Add show`} onChange={(e) => handleSearch(e.target.value)} />
            <ListSearchResults items={response?.data} loading={response?.loading} addItem={addItem} deleteItem={deleteItem} />
        </form>
    );
}

export default ListSearchItems;