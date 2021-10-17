import { AxiosRequestConfig } from "axios"
import { useFetch } from "./useFetch"
import Transformer from "@client/util/transformer/Transformer";

const useFetchTransformer = <I, O>(req: AxiosRequestConfig, transformer: Transformer): (O | null) => {
    const result = useFetch<I>(req);
    if(result?.data)
        return transformer<I, O>(result?.data);
    return null;
}

export default useFetchTransformer;