import AxiosClient from "api/auth/AxiosClient";
import Response from "api/common/Response";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";

const useFetch = <T extends Object>(req: AxiosRequestConfig, ignoreFirst?: boolean): Response<T> | undefined => {
  const firstUpdate = useRef(true);
  const [response, setResponse] = useState<Response<T>>({
    data: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    if (ignoreFirst && firstUpdate.current) {
      firstUpdate.current = false;
      setResponse({
        data: null,
        error: null,
        loading: false
      });
      return;
    }
    setResponse({
      data: null,
      error: null,
      loading: true
    });

    if (!req.url) return;

    AxiosClient
      .request(req)
      .then((axiosResponse: AxiosResponse<T>) => {
        setResponse({ data: axiosResponse.data, loading: false });
      })
      .catch((error: any) => {
        setResponse({ error, loading: false });
      });

  }, [req.url]);

  return response;
};

export default useFetch;
