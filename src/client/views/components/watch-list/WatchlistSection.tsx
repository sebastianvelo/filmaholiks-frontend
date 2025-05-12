import DynamicWatchlist, { DynamicWatchlistProps } from "client/views/components/watch-list/DynamicWatchlist";
import { auth } from "config/firebase/firebaseApp";
import StaticWatchlist from "./StaticWatchlist";

export interface WatchlistSectionProps extends DynamicWatchlistProps {
    title: string;
}

const WatchlistSection: React.FC<WatchlistSectionProps> = (props: WatchlistSectionProps) => {
    const uid = auth.currentUser?.uid;

    return (
        <>
            {!uid && <StaticWatchlist {...props} />}
            {uid && <DynamicWatchlist {...props} />}
        </>
    );
};

export default WatchlistSection;
