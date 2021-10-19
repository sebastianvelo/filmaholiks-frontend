import Service from "api/service/Service";
import { useFetch } from "./useFetch";


const useService = <M, V>(cfg: Service<M, V>): [(V | null), boolean] => {
    const result = useFetch<M>(cfg.request);
    if (result?.data)
        return [cfg.getView(result?.data), false];
    return [null, !!result?.loading];
}

export default useService;