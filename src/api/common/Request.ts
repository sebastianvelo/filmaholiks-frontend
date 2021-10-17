import { AxiosRequestConfig, Method } from 'axios';

abstract class Request {
    protected abstract baseUrl: string;
    protected abstract collection: string;
    protected abstract headers: Record<string, string>;

    private req<P>(method: Method, url: string, params: P): AxiosRequestConfig {
        return this.getOptions(method, url, params);
    }

    private getOptions<P>(method: Method, url: string, params?: P): AxiosRequestConfig {
        return ({
            method,
            params,
            headers: this.headers,
            url: this.getFullPath(url)
        })
    }

    protected get<P>(url: string, params?: P): AxiosRequestConfig {
        return this.req('GET', url, params);
    }

    protected post<P>(url: string, params?: P): AxiosRequestConfig {
        return this.req('POST', url, params);
    }

    private getFullPath(url: string): string {
        return `${this.getURL()}${url}`;
    }

    private getURL(): string {
        return `${this.baseUrl}${this.collection}`;
    }
}

export default Request;