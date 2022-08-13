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
        .addIf("bg-black", props.loading)
        .add("hidden group-hover:flex w-96 h-screen z-50 flex items-center justify-center absolute left-0")
        .build();

    const boxClassName = Tailwind.builder()
        .add("z-50 overflow-y-scroll h-2/3 top-0 absolute")
        .add("space-y-4")
        .add("text-center lg:text-left")
        .add("bg-primary-lighter dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 dark:bg-opacity-30")
        .build();
    return (
        <div className={className}>
            <Loading loading={props.loading}>
                {props.items && (
                    <section className={boxClassName} >
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