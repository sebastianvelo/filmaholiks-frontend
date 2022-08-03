import Headline from "client/common/components/headline/Headline";
import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import ActionableItem from "../../actionable-item/ActionableItem";
import { ItemProps } from "../../actionable-item/item/Item";

interface SearchResultsProps {
    items?: ItemProps[] | null;
    loading?: boolean;
    addCard: (item: ItemProps) => void;
}

const SearchResults: FunctionComponent<SearchResultsProps> = (props: SearchResultsProps) => {
    const className = Tailwind.builder()
        .addIf("w-full bg-black flex items-center justify-center absolute bg-gradient-to-t from-secondary to-secondary-dark", props.loading)
        .add("hidden group-hover:flex w-full absolute left-0 h-96")
        .build();

    return (
        <div className={className}>
            <Loading loading={props.loading}>
                {props.items && (
                    <section className={`px-4 py-4 space-y-4 bg-gradient-to-t from-secondary to-secondary-dark w-full h-full overflow-y-scroll z-50`} >
                        <Headline className={`text-5xl`}>Results</Headline>
                        {props.items?.map((item: ItemProps) => <ActionableItem item={item} action={() => props.addCard(item)} />)}
                    </section>
                )}
            </Loading>
        </div>
    );
}

export default SearchResults;