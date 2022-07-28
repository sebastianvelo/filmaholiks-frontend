import { AxiosRequestConfig } from "axios";
import Headline from "client/common/components/headline/Headline";
import Loading from "client/common/components/loading/Loading";
import { UserParams } from "client/common/params/Params";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import { ColumnProps } from "./columns/column/Column";
import Columns from "./columns/Columns";

export interface WatchlistPageBlueprintProps {
    getPage: (user: string) => AxiosRequestConfig<WatchlistPageProps>;
}

export interface WatchlistPageProps {
    columns: ColumnProps[];
}

const WatchlistPage: FunctionComponent<WatchlistPageBlueprintProps> = (props: WatchlistPageBlueprintProps) => {
    const { user }: UserParams = useParams();
    const page = useFetch<WatchlistPageProps>(props.getPage(user));

    return (
        <Loading loading={page?.loading}>
            <div className="px-32 space-y-8 pt-8">
                <Headline className={`text-5xl text-primary`}>Watchlist</Headline>
                <Columns columns={page?.data?.columns!} />
            </div>
        </Loading>
    );
}

export default WatchlistPage;