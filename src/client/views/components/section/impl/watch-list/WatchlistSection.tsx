import useList from "@hooks/useList";
import AddListButton from "client/views/components/watch-list/buttons/AddListButton";
import Watchlist from "client/views/components/watch-list/Watchlist";
import { WatchlistTabProps } from "client/views/pages/detail/body/impl/DetailWatchlist";
import Section from "../../Section";

const WatchlistSection: React.FC<WatchlistTabProps> = (props: WatchlistTabProps) => {
    const [service, listService] = useList(props.mediaType, props.lists);

    return (
        <div className="relative">
            {props.dynamic && <AddListButton add={service.list.add} />}
            <Section title={props.title}>
                <Watchlist {...props} service={service} listService={listService} />
            </Section>
        </div>
    );
};

export default WatchlistSection;
