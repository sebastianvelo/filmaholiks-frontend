import axios from 'axios';
import config from 'config/backend/backend.config';
import { auth } from 'config/firebase/firebaseApp';

const AxiosClient = axios.create({ baseURL: config.baseUrl });

AxiosClient.interceptors.request.use(
    async (cfg) => {
        const user = auth.currentUser;
        if (user) {
            const token = await user.getIdToken();
            cfg.headers = {
                ...cfg.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        return cfg;
    },
    (err) => Promise.reject(err)
);

export default AxiosClient;
