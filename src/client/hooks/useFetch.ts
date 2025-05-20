import AxiosClient from "api/auth/AxiosClient";
import Response from "api/common/Response";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

interface FetchOptions {
  ignoreFirst?: boolean; // Ignorar la primera renderización
  lazy?: boolean; // No ejecutar automáticamente, esperar a un trigger
  deps?: any[]; // Dependencias adicionales para controlar cuándo se ejecuta
}

type FetchResponse<T extends Object> = [Response<T>, () => Promise<void>];

/**
 * Custom hook para realizar peticiones HTTP
 * @param req Configuración de la petición
 * @param options Opciones adicionales
 * @returns Objeto de respuesta con datos, error y estado de carga
 */
const useFetch = <T extends Object>(req: AxiosRequestConfig, options?: FetchOptions): FetchResponse<T> => {
  const { ignoreFirst = false, lazy = false, deps = [] } = options || {};
  const firstRender = useRef(true);
  const reqRef = useRef(req);

  useEffect(() => {
    reqRef.current = req;
  }, [req]);

  const [response, setResponse] = useState<Response<T>>({
    data: null,
    error: null,
    loading: false
  });

  const executeFetch = useCallback(async (): Promise<void> => {
    const currentReq = reqRef.current;

    if (!currentReq.url) {
      setResponse({
        data: null,
        error: new Error("URL is required"),
        loading: false
      });
      return;
    }

    setResponse(prev => ({ ...prev, loading: true }));

    try {
      const axiosResponse: AxiosResponse<T> = await AxiosClient.request(currentReq);
      setResponse({ data: axiosResponse.data, error: null, loading: false });
    } catch (error: any) {
      setResponse({ data: null, error, loading: false });
    }
  }, []);

  useEffect(() => {
    if (ignoreFirst && firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (lazy) {
      return;
    }

    executeFetch();

  }, [executeFetch, lazy, req.url, ...deps]);

  return [response, executeFetch];
};

export default useFetch;