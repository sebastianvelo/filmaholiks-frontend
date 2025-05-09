import UserEntity from "@entity/user/UserEntity";
import Collection from "api/common/Collection";
import axios from "axios";
import BackendRequest from "../BackendRequest";

class UserRequest extends BackendRequest {
    protected collection: string = Collection.USER;

    public save = async (email: string) => {
        const config = this.post(`/`, { email });
        const user = await axios.request(config);
        return user.data;
    }

    public getByEmail = async (email: string): Promise<UserEntity> => {
        const config = this.get(`/email/${email}`);
        const user = await axios.request(config);
        return user.data;
    }
}

export default new UserRequest();
