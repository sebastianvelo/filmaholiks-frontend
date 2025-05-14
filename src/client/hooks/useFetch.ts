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

  // Ref para rastrear el primer renderizado
  const firstRender = useRef(true);

  // Ref para almacenar la configuración de la petición actualizada
  const reqRef = useRef(req);

  // Actualizar la referencia cuando cambie req
  useEffect(() => {
    reqRef.current = req;
  }, [req]);

  // Estado para almacenar la respuesta
  const [response, setResponse] = useState<Response<T>>({
    data: null,
    error: null,
    loading: false  // Inicialmente no cargando si es lazy
  });

  // Función para ejecutar la petición - ahora usando useCallback para mantener la referencia
  const executeFetch = useCallback(async (): Promise<void> => {
    // Usar la referencia actualizada
    const currentReq = reqRef.current;

    // No hacer nada si no hay URL
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
  }, []); // Sin dependencias para evitar recrear la función

  useEffect(() => {
    // Caso 1: Ignorar primera renderización si ignoreFirst es true
    if (ignoreFirst && firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Caso 2: No ejecutar automáticamente si lazy es true
    if (lazy) {
      return;
    }

    // Caso 3: Ejecutar normalmente
    executeFetch();

  }, [executeFetch, lazy, req.url, ...deps]);

  return [response, executeFetch];
};

export default useFetch;