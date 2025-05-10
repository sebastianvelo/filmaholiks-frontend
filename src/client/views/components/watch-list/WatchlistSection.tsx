import useList from "@hooks/useList";
import AddListButton from "client/views/components/watch-list/buttons/AddListButton";
import EditModeButton from "client/views/components/watch-list/buttons/EditModeButton";
import Watchlist from "client/views/components/watch-list/Watchlist";
import { WatchlistTabProps } from "client/views/pages/detail/body/impl/DetailWatchlist";
import { useState } from "react";
import Section from "../section/Section";

const WatchlistSection: React.FC<WatchlistTabProps> = (props: WatchlistTabProps) => {
    const [service, listService] = useList(props.mediaType, props.lists);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const toggleEditing = () => setIsEditing(!isEditing);

    return (
        <div className="relative">
            <div className="top-0 left-full absolute flex space-x-4">
                {props.dynamic && <AddListButton add={service.list.add} />}
                {props.dynamic && <EditModeButton isEditing={isEditing} toggleEditing={toggleEditing} />}
            </div>
            <Section title={props.title}>
                <Watchlist {...props} service={service} listService={listService} isEditing={isEditing} />
            </Section>
        </div>
    );
};

export default WatchlistSection;
