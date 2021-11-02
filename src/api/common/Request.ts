import { AxiosRequestConfig, Method } from "axios";

abstract class Request {
  protected abstract baseUrl: string;

  protected abstract collection: string;

  protected abstract headers: Record<string, string>;

  private req(method: Method, url: string, params?: object): AxiosRequestConfig {
    return this.getOptions(method, url, params);
  }

  private getOptions(
    method: Method,
    url: string,
    params?: any
  ): AxiosRequestConfig {
    return {
      method,
      params,
      headers: this.headers,
      url: this.getFullPath(url)
    };
  }

  protected get(url: string, params?: object): AxiosRequestConfig {
    return this.req("GET", url, params);
  }

  protected post(url: string, params?: object): AxiosRequestConfig {
    return this.req("POST", url, params);
  }

  private getFullPath(url: string): string {
    return `${this.getURL()}${url}`;
  }

  private getURL(): string {
    return `${this.baseUrl}${this.collection}`;
  }
}

export default Request;
