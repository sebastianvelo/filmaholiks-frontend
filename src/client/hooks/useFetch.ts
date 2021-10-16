import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

export const useFetch = <T extends Object>(req: AxiosRequestConfig) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    axios
      .request(req)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [req]);

  return data;
};
