import { AxiosRequestConfig } from "axios";
import Headline from "client/common/components/headline/Headline";
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
        <div className="space-y-6 p-4">
            <Headline className="text-4xl">Watchlist</Headline>
            <Columns columns={page?.data?.columns} />
        </div>
    );
}

export default WatchlistPage;