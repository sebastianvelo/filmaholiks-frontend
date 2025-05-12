import SessionUserHelper from "client/helper/SessionUserHelper";
import UserEntity from "@entity/user/UserEntity";
import useUserEntity from "./useUserEntity";
import { auth } from 'config/firebase/firebaseApp';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export interface UseFirebaseUser {
    user: UserEntity | null;
    signIn: (email: string, password: string) => Promise<any>;
    createUser: (email: string, password: string) => Promise<any>;
    signOut: () => Promise<void>;
    signInWithGoogle: () => Promise<any>;
}

const useFirebaseUser = (): UseFirebaseUser => {
    const userEntity = useUserEntity();

    const signIn = async (email: string, password: string) =>
        signInWithEmailAndPassword(auth, email, password);

    const signInWithGoogle = async () =>
        signInWithPopup(auth, new GoogleAuthProvider());

    const createUser = async (email: string, password: string) =>
        createUserWithEmailAndPassword(auth, email, password);

    const signOut = async () => {
        SessionUserHelper.signOut();
        userEntity.signOut();
        signOut();
    }

    return {
        user: userEntity.user, signIn, createUser, signOut, signInWithGoogle
    };
};

export default useFirebaseUser;