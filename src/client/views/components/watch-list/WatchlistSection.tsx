import useList from "@hooks/useList";
import Watchlist, { WatchlistProps } from "client/views/components/watch-list/Watchlist";
import { useState } from "react";
import Section from "../section/Section";
import WatchlistHeader from "./header/WatchlistHeader";

export interface WatchlistSectionProps extends WatchlistProps {
    title: string;
}

const WatchlistSection: React.FC<WatchlistSectionProps> = (props: WatchlistSectionProps) => {
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
