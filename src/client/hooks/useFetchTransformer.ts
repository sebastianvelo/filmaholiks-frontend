import { AxiosRequestConfig } from "axios"
import { useFetch } from "./useFetch"
import Transformer from "client/util/transformer/Transformer";

export interface FetchTransformer<I, O> { 
    request: AxiosRequestConfig;
    transformer: Transformer<I, O>;
}

const useFetchTransformer = <I, O>(cfg: FetchTransformer<I, O>): [(O | null), boolean] => {
    const result = useFetch<I>(cfg.request);
    if (result?.data)
        return [cfg.transformer(result?.data), false];
    return [null, !!result?.loading];
}

export default useFetchTransformer;