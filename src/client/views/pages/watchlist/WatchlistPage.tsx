import { AxiosRequestConfig } from "axios";
import Loading from "client/common/components/loading/Loading";
import { UserParams } from "client/common/params/Params";
import useFetch from "client/hooks/useFetch";
import Section from "client/views/components/section/Section";
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

    return (
        <Loading loading={page?.loading}>
            <div className="px-28 py-8">
                <Section title={`Watchlist of ${user}`}>
                    <Lists lists={page?.data?.lists!} />
                </Section>
            </div>
        </Loading>
    );
}

export default WatchlistPage;