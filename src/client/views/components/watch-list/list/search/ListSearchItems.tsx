import { AxiosRequestConfig } from "axios";
import Input from "client/common/components/form/input/Input";
import Tailwind from "client/common/tailwind/Tailwind";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent, useState } from "react";
import { CardHorizontalProps } from "../../../../../common/components/card-horizontal/CardHorizontal";
import { ActionableCardProps } from "../actionable-item/ActionableCard";
import ListSearchResults from "./results/ListSearchResults";

export interface ListSearchItemsProps {
    addItem: (item: CardHorizontalProps) => void
    deleteItemOfOtherList: (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => void;
    searchItems: (query: string) => AxiosRequestConfig<any>;
}

const ListSearchItems: FunctionComponent<ListSearchItemsProps> = (props: ListSearchItemsProps) => {
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(props.searchItems(query));
    const response = useFetch<ActionableCardProps[]>(url, true);

    const handleSearch = (value: string) => {
        setQuery(value);
        if (value.length > 3) {
            setUrl(props.searchItems(value));
        } else {
            response!.data = null;
        }
    };

    const addItem = (item: CardHorizontalProps) => {
        handleSearch('');
        props.addItem(item);
    };

    const deleteItem = (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => {
        handleSearch('');
        props.deleteItemOfOtherList(listIdx, itemId, requiresConfirmation);
    }

    const inputClassName = Tailwind.builder()
        .add('px-4 py-4 transition-color duration-500 cursor-pointer w-full')
        .add('dark:bg-secondary-dark bg-secondary-lighter dark:placeholder-opacity-50 placeholder-secondary-dark dark:placeholder-primary-light')
        .add('focus:outline-none')
        .add("rounded-sm")
        .add('dark:text-white text-black')
        .build();

    return (
        <form className="group relative w-full">
            <Input revert className={inputClassName} placeholder={"Add show"} onChange={(e) => handleSearch(e.target.value)} />
            <ListSearchResults items={response?.data} loading={response?.loading} addItem={addItem} deleteItem={deleteItem} />
        </form>
    );
}

export default ListSearchItems;