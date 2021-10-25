import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import Response from "api/common/Response";

export const useFetch = <T extends Object>(req: AxiosRequestConfig): Response<T> | undefined => {
  const [response, setResponse] = useState<Response<T>>({ data: null, error: null, loading: true });

  useEffect(() => {
    axios
      .request(req)
      .then((response: AxiosResponse<T>) => {
        setResponse({ data: response.data, loading: false });
      })
      .catch((error: any) => {
        setResponse({ error, loading: false });
      });
  }, []);

  return response;
};
