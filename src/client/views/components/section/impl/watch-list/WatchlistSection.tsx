import useList from "client/hooks/useList";
import AddListButton from "client/views/components/watch-list/add-list-button/AddListButton";
import Watchlist from "client/views/components/watch-list/Watchlist";
import { WatchlistTabProps } from "client/views/pages/detail/body/impl/DetailWatchlist";
import Section from "../../Section";

const WatchlistSection: React.FC<WatchlistTabProps> = (props: WatchlistTabProps) => {
    const [service, listService] = useList(props.mediaType, props.lists);
    
    return (
        <Section title={props.title}>
            {props.dynamic && <AddListButton add={service.list.add} />}
            <Watchlist {...props} service={service} listService={listService} />
        </Section>
    );
};

export default WatchlistSection;
