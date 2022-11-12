import axios from "axios";
import APIRequest from "../APIRequest";

class UserRequest extends APIRequest {
    protected collection: string = "/user";

    public save = async (email: string) => {
        const config = this.post(`/`, { email });
        const user = await axios.request(config);
        return user.data;
    }

}

export default new UserRequest();
