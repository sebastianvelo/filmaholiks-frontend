import { auth } from "client/firebase/firebase";
import SessionUserHelper from "client/helper/SessionUserHelper";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import UserEntity from "shared/entity/user/UserEntity";
import useUserEntity from "./useUserEntity";

export interface UseFirebaseUser {
    data: UserEntity | null;
    signIn: (email: string, password: string) => Promise<any>;
    createUser: (email: string, password: string) => Promise<any>;
    signOut: () => Promise<void>;
    signInWithGoogle: () => Promise<any>;
}

const useFirebaseUser = (): UseFirebaseUser => {
    const userEntity = useUserEntity();

    const signIn = async (email: string, password: string) =>
        auth.signInWithEmailAndPassword(email, password);

    const signInWithGoogle = async () =>
        signInWithPopup(auth, new GoogleAuthProvider());

    const createUser = async (email: string, password: string) =>
        auth.createUserWithEmailAndPassword(email, password);

    const signOut = async () => {
        SessionUserHelper.signOut();
        userEntity.signOut();
        auth.signOut();
    }

    return {
        data: userEntity.user, signIn, createUser, signOut, signInWithGoogle
    };
};

export default useFirebaseUser;