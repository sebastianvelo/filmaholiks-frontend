import Request from "../common/Request";

abstract class APIRequest extends Request {
    protected baseUrl: string = 'http://localhost:5000';

    protected headers: Record<string, string> = { };
}

export default APIRequest;