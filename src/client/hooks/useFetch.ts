import AxiosClient from "api/auth/AxiosClient";
import Response from "api/common/Response";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook para realizar peticiones HTTP
 * @param req Configuración de la petición
 * @param options Opciones adicionales
 * @returns Objeto de respuesta con datos, error y estado de carga
 */
const useFetch = <T extends Object>(
  req: AxiosRequestConfig,
  options?: {
    ignoreFirst?: boolean;  // Ignorar la primera renderización
    lazy?: boolean;         // No ejecutar automáticamente, esperar a un trigger
    deps?: any[];           // Dependencias adicionales para controlar cuándo se ejecuta
  }
): [Response<T>, () => Promise<void>] => {
  const { ignoreFirst = false, lazy = false, deps = [] } = options || {};

  // Ref para rastrear el primer renderizado
  const firstRender = useRef(true);

  // Estado para almacenar la respuesta
  const [response, setResponse] = useState<Response<T>>({
    data: null,
    error: null,
    loading: false  // Inicialmente no cargando si es lazy
  });

  // Función para ejecutar la petición
  const executeFetch = async (): Promise<void> => {
    // No hacer nada si no hay URL
    if (!req.url) {
      setResponse({
        data: null,
        error: new Error("URL is required"),
        loading: false
      });
      return;
    }

    setResponse(prev => ({ ...prev, loading: true }));

    try {
      const axiosResponse: AxiosResponse<T> = await AxiosClient.request(req);
      setResponse({ data: axiosResponse.data, error: null, loading: false });
    } catch (error: any) {
      setResponse({ data: null, error, loading: false });
    }
  };

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

  }, [req.url, ...deps]);

  return [response, executeFetch];
};

export default useFetch;