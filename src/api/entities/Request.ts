import { AxiosRequestConfig, Method } from "axios";

abstract class Request {
  protected abstract baseUrl: string;

  protected abstract collection: string;

  protected abstract headers: Record<string, string>;

  private getOptions(
    method: Method,
    url: string,
    params?: any,
    data?: any,
  ): AxiosRequestConfig {
    return {
      method,
      params,
      data,
      headers: this.headers,
      url: this.getFullPath(url)
    };
  }

  protected get(url: string, params?: object): AxiosRequestConfig {
    return this.getOptions("GET", url, params);
  }

  protected post(url: string, params?: object): AxiosRequestConfig {
    return this.getOptions("POST", url, params);
  }

  protected put(url: string, data?: object, params?: object): AxiosRequestConfig {
    return this.getOptions("PUT", url, params, data);
  }

  private getFullPath(url: string): string {
    return `${this.getURL()}${url}`;
  }

  private getURL(): string {
    return `${this.baseUrl}${this.collection}`;
  }
}

export default Request;
