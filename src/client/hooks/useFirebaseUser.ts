import { auth } from "client/firebase/firebase";
import { useUser } from "reactfire";

const useFirebaseUser = () => {
    const user = useUser();

    const signIn = async (email: string, password: string) =>
        auth.signInWithEmailAndPassword(email, password);

    const createUser = async (email: string, password: string) =>
        auth.createUserWithEmailAndPassword(email, password);

    const signOut = async () => {
        await auth.signOut();
    }

    return {
        data: user.data, signIn, createUser, signOut
    };
};

export default useFirebaseUser;