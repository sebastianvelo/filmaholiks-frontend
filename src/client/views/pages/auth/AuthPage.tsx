import Action from "client/common/atom/action/Action";
import Input from "client/common/components/form/input/Input";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { auth } from "client/firebase/firebase";
import Section from "client/views/components/section/Section";
import { FunctionComponent, useState } from "react";
import { useUser } from "reactfire";

export interface AuthPageProps {

}

const AuthPage: FunctionComponent<AuthPageProps> = () => {
    const user = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    };

    const signOut = async () => {
        await auth.signOut();
    }

    return (
        <div className="grid place-items-center w-screen">
            {!user || !user.data && (
                <form className="w-1/3">
                    <Section title="Login">
                        <Input onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" />
                        <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                        <Action onClick={signIn} color={ComponentHovereableColor.SUCCESS}>Login</Action>
                    </Section>
                </form>
            )}
            {user && user.data && (
                <>
                    <p>{user.data.displayName}</p>
                    <Action onClick={signOut} color={ComponentHovereableColor.DANGER}>Logout</Action>
                </>
            )}
        </div>
    );
};

export default AuthPage;