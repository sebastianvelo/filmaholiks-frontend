import Request from "../common/Request";
import config from "../../config/backend.config";

abstract class APIRequest extends Request {
  protected baseUrl: string = config.baseUrl;

  protected headers: Record<string, string> = {};
}

export default APIRequest;
