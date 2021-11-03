import Request from "../entities/Request";
import config from "../api.env.config";

abstract class APIRequest extends Request {
  protected baseUrl: string = config.baseUrl;

  protected headers: Record<string, string> = {};
}

export default APIRequest;
