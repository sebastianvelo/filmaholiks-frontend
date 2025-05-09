import Request from "../common/Request";
import config from "config/backend/backend.config";

abstract class BackendRequest extends Request {
  protected baseUrl: string = config.baseUrl;

  protected headers: Record<string, string> = {};
}

export default BackendRequest;
