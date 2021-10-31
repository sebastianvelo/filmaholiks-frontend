import { AxiosRequestConfig } from "axios";
import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent } from "react";

export interface FetcherPageProps {
    getPage: AxiosRequestConfig;
    Component: FunctionComponent<any>;
}

const FetcherPage: FunctionComponent<FetcherPageProps> = (props: FetcherPageProps) => {
    const page = useFetch(props.getPage);
    const className = Tailwind.builder()
        .addIf(`h-screen flex justify-center items-center`, page?.loading)
        .build();
    return (
        <div className={className}>
            <Loading loading={page?.loading}>
                <props.Component {...page?.data} />
            </Loading>
        </div>
    );
}

export default FetcherPage;