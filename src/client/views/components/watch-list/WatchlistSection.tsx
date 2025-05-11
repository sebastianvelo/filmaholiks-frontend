import useList from "@hooks/useList";
import Watchlist from "client/views/components/watch-list/Watchlist";
import { WatchlistTabProps } from "client/views/pages/detail/body/impl/DetailWatchlist";
import { useState } from "react";
import Section from "../section/Section";
import WatchlistHeader from "./header/WatchlistHeader";

const WatchlistSection: React.FC<WatchlistTabProps> = (props: WatchlistTabProps) => {
    const [service, listService] = useList(props.mediaType, props.lists);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const toggleEditing = () => setIsEditing(!isEditing);

    return (
        <Section title={props.title} header={<WatchlistHeader dynamic={props.dynamic} add={service.list.add} isEditing={isEditing} toggleEditing={toggleEditing} />}>
            <Watchlist {...props} service={service} listService={listService} isEditing={isEditing} />
        </Section>
    );
};

export default WatchlistSection;
