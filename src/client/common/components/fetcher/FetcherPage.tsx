import { AxiosRequestConfig } from "axios";
import Loading from "@components/loading/Loading";
import Tailwind from "@tailwind-helper/Tailwind";
import useFetch from "@hooks/useFetch";
import { FunctionComponent } from "react";
import { Redirect } from "react-router";
import PageRoute from "shared/routes/PageRoute";

export interface FetcherPageProps {
    getPage: AxiosRequestConfig;
    Component: FunctionComponent<any>;
}

const FetcherPage: FunctionComponent<FetcherPageProps> = (props: FetcherPageProps) => {
    const page = useFetch(props.getPage);
    const className = Tailwind.builder()
        .addIf(`h-screen flex justify-center items-center`, page?.loading)
        .build();

    if (page?.error)
        return <Redirect to={PageRoute.ERROR} />;

    return (
        <div className={className}>
            <Loading loading={page?.loading}>
                <props.Component {...page?.data} />
            </Loading>
        </div>
    );
}

export default FetcherPage;