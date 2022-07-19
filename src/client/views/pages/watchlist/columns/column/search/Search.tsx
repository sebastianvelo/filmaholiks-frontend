import WatchlistPageRequest from "api/request/pages/WatchlistPageRequest";
import Input from "client/common/components/form/input/Input";
import Headline from "client/common/components/headline/Headline";
import Loading from "client/common/components/loading/Loading";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent, useState } from "react";
import { ItemProps } from "../item/Item";
import Suggestion from "./suggestion/Suggestion";

interface SearchProps {
    addCard: (item: ItemProps) => void
}

const Search: FunctionComponent<SearchProps> = (props: SearchProps) => {
    const [url, setUrl] = useState(WatchlistPageRequest.showsSuggestions(''));
    const suggestions = useFetch<ItemProps[]>(url);

    const handleSearch = (e: any) => {
        if (e.target.value.length > 3) {
            setUrl(WatchlistPageRequest.showsSuggestions(e.target.value));
        }
    };

    const getWrapperClassName = () => suggestions?.loading ? "w-full flex items-center h-96 justify-center absolute bg-gray-400" : "";

    return (
        <div className={`group h-full relative`}>
            <Input placeholder={`Search`} onChange={handleSearch} />
            <div className={getWrapperClassName()}>
                <Loading loading={suggestions?.loading}>
                    {suggestions?.data && (
                        <div className="space-y-4 bg-gray-400 group-hover:block hidden w-96 absolute h-96 overflow-y-auto p-4 rounded-xl">
                            <Headline className="text-2xl text-dark">Results</Headline>
                            {suggestions?.data?.map((suggestion: any) => <Suggestion suggestion={suggestion} addCard={props.addCard} />)}
                        </div>
                    )}
                </Loading>
            </div>
        </div>
    );
}

export default Search;