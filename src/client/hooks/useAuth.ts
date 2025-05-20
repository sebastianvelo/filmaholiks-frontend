import { useEffect, useState } from "react";
import { useUser } from "reactfire";
import { auth } from 'config/firebase/firebaseApp';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import UserRequest from "api/request/user/UserRequest";
import UserEntity from "@entity/user/UserEntity";
import SessionUserHelper from "client/helper/SessionUserHelper";

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
    signOut: () => Promise<void>;
}

/**
 * Hook principal de autenticación que combina la autenticación de Firebase 
 * con la gestión de usuario en la base de datos y el estado local.
 */
const useAuth = (): UseAuthReturn => {
    const reactfireUser = useUser();
    const [user, setUser] = useState<UserEntity | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Escucha cambios en el usuario de Firebase y actualiza la entidad de usuario
    useEffect(() => {
        if (reactfireUser?.data?.email) {
            UserRequest.getByEmail(reactfireUser.data.email).then(u => {
                setUser(u);
                SessionUserHelper.setUser(u);
            });
        } else {
            setUser(null);
        }
    }, [reactfireUser?.data?.email]);

    const signInWithEmail = async () => {
        try {
            setIsLoading(true);
            const credentials = await signInWithEmailAndPassword(auth, email, password);

            if (!credentials.user?.displayName) {
                await updateProfile(credentials.user!, {
                    displayName: email.split("@")[0]
                });
            }
        } catch (error) {
            console.error("Error signing in with email:", error);
            throw error; // Propaga el error para manejo externo si es necesario
        } finally {
            setIsLoading(false);
        }
    };

    const signInWithGoogle = async () => {
        try {
            setIsLoading(true);
            const credentials = await signInWithPopup(auth, new GoogleAuthProvider());

            if (credentials.user?.email) {
                const dbUser = await UserRequest.getByEmail(credentials.user.email);
                if (!dbUser) {
                    await UserRequest.save(credentials.user.email);
                }
            }
        } catch (error) {
            console.error("Error signing in with Google:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const createUser = async () => {
        try {
            setIsLoading(true);
            const savedUser = await UserRequest.save(email);
            const credentials = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(credentials.user!, {
                displayName: savedUser.userName,
                photoURL: savedUser.avatar
            });
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const signOut = async () => {
        try {
            setIsLoading(true);
            await auth.signOut();
            SessionUserHelper.signOut();
            setUser(null);
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        user,
        isLoading,
        email,
        password,
        setEmail,
        setPassword,
        signInWithEmail,
        signInWithGoogle,
        createUser,
        signOut
    };
};

export default useAuth;