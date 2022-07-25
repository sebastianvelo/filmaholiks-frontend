import { AxiosRequestConfig } from "axios";
import { UserParams } from "client/common/params/Params";
import useFetch from "client/hooks/useFetch";
import Section from "client/views/components/section/Section";
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
        <div className="xl:px-28">
            <Section title={"Watchlist"}>
                <Columns columns={page?.data?.columns} />
            </Section>
        </div>

    );
}

export default WatchlistPage;