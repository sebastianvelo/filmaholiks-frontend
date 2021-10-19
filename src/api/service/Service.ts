import { AxiosRequestConfig } from "axios";
import Transformer from "./transformer/Transformer";

interface Service<M, V> { 
    request: AxiosRequestConfig<M>;
    getView: Transformer<M, V>;
}
export default Service;