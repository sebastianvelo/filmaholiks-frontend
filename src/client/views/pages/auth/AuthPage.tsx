import Action from "client/common/atom/action/Action";
import Input from "client/common/components/form/input/Input";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { auth } from "client/firebase/firebase";
import Section from "client/views/components/section/Section";
import { FunctionComponent, useState } from "react";

export interface AuthPageProps {

}

const AuthPage: FunctionComponent<AuthPageProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        await auth.createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className="grid place-items-center w-screen">

            <form className="w-1/3">
                <Section title="Login">
                    <Input onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" />
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                    <Action onClick={login} color={ComponentHovereableColor.SUCCESS}>Login</Action>
                </Section>
            </form>
        </div>
    );
};

export default AuthPage;