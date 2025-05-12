import UserRequest from "api/request/user/UserRequest";
import useFirebaseUser from "@hooks/useFirebaseUser";
import { useState } from "react";
import UserEntity from "@entity/user/UserEntity";

interface UseAuthReturn {
    user: UserEntity | null;
    isLoading: boolean;
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    signInWithEmail: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    createUser: () => Promise<void>;
    logout: () => Promise<void>;
}

const useAuth = (): UseAuthReturn => {
    const user = useFirebaseUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const signInWithEmail = async () => {
        try {
            setIsLoading(true);
            const credentials = await user.signIn(email, password);

            if (!credentials.user?.displayName) {
                await credentials.user!.updateProfile({
                    displayName: email.split("@")[0]
                });
            }
        } catch (error) {
            console.error("Error signing in with email:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const signInWithGoogle = async () => {
        try {
            setIsLoading(true);
            const credentials = await user.signInWithGoogle();

            if (credentials.user?.email) {
                const dbUser = await UserRequest.getByEmail(credentials.user?.email);
                if (!dbUser) {
                    await UserRequest.save(credentials.user.email);
                }
            }
        } catch (error) {
            console.error("Error signing in with Google:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const createUser = async () => {
        try {
            setIsLoading(true);
            const savedUser = await UserRequest.save(email);
            const credentials = await user.createUser(email, password);

            await credentials.user!.updateProfile({
                displayName: savedUser.userName,
                photoURL: savedUser.avatar
            });
        } catch (error) {
            console.error("Error creating user:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            await user.signOut();
        } catch (error) {
            console.error("Error logging out:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        user: user.user,
        isLoading,
        email,
        password,
        setEmail,
        setPassword,
        signInWithEmail,
        signInWithGoogle,
        createUser,
        logout
    };
};

export default useAuth;