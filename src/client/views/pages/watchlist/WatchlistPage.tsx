import { AxiosRequestConfig } from "axios";
import Headline from "client/common/components/headline/Headline";
import Loading from "client/common/components/loading/Loading";
import { UserParams } from "client/common/params/Params";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import { ListProps } from "./lists/list/List";
import Lists from "./lists/Lists";

export interface WatchlistPageBlueprintProps {
    getPage: (user: string) => AxiosRequestConfig<WatchlistPageProps>;
}

export interface WatchlistPageProps {
    lists: ListProps[];
}

const WatchlistPage: FunctionComponent<WatchlistPageBlueprintProps> = (props: WatchlistPageBlueprintProps) => {
    const { user }: UserParams = useParams();
    const page = useFetch<WatchlistPageProps>(props.getPage(user));
    const title = user === "my" ? "My watchlist" : `Watchlist of ${user}`;

    return (
        <Loading loading={page?.loading}>
            <div className="2xl:px-12 py-8 space-y-8">
                <Headline className="text-primary text-5xl">{title}</Headline>
                <Lists lists={page?.data?.lists!} />
            </div>
        </Loading>
    );
}

export default WatchlistPage;