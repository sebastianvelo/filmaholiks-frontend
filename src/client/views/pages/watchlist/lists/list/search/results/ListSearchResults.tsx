import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import ActionableItem from "../../actionable-item/ActionableItem";
import { ItemProps } from "../../actionable-item/item/Item";

interface ListSearchResultsProps {
    items?: ItemProps[] | null;
    loading?: boolean;
    addItem: (item: ItemProps) => void;
    deleteItem: (listIdx: number, idx: number, requiresConfirmation?: boolean) => void;
}

const ListSearchResults: FunctionComponent<ListSearchResultsProps> = (props: ListSearchResultsProps) => {
    const className = Tailwind.builder()
        .addIf("w-96 bg-black flex items-center justify-center absolute", props.loading)
        .add("hidden group-hover:flex w-full absolute left-0 h-96")
        .build();

    return (
        <div className={className}>
            <Loading loading={props.loading}>
                {props.items && (
                    <section className={`p-2 space-y-4 w-full h-full overflow-y-scroll z-50 bg-black`} >
                        {props.items?.map((item: ItemProps, idx: number) => {
                            const it = WatchlistService.fromLocalStorage.item.retrieveIdx(item.title);
                            const action = () => it ? props.deleteItem(it.listIdx, it.itemIdx) : props.addItem(item);
                            return <ActionableItem
                                key={item.title}
                                idx={idx}
                                item={item}
                                delete={!!it}
                                action={action}
                            />;
                        })}
                    </section>
                )}
            </Loading>
        </div>
    );
}

export default ListSearchResults;