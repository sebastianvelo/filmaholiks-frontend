import UserRequest from "api/request/user/UserRequest";
import Action from "client/common/atom/action/Action";
import Input from "client/common/components/form/input/Input";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import useFirebaseUser from "client/hooks/useFirebaseUser";
import Section from "client/views/components/section/Section";
import { FunctionComponent, useState } from "react";
import { Redirect } from "react-router";
import { PageRouteBuilder } from "shared/routes/PageRoute";
import LogoutButton from "./logout/LogoutButton";

export interface AuthPageProps {

}

const AuthPage: FunctionComponent<AuthPageProps> = () => {
    const user = useFirebaseUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        const credentials = await user.signIn(email, password)

        if (!credentials.user?.displayName) {
            await credentials.user!.updateProfile({
                displayName: email.split("@")[0]
            });
        }
    };

    const createUser = async () => {
        const u = await UserRequest.save(email);
        const credentials = await user.createUser(email, password)
        await credentials.user!.updateProfile({
            displayName: u.userName,
            photoURL: u.avatar
        })
    }

    if (user.data)
        return <Redirect to={PageRouteBuilder.USER_DETAIL(user.data.displayName!)} />;


    return (
        <div className="grid place-items-center w-screen">
            {!user || !user.data && (
                <form className="w-1/3">
                    <Section title="Login">
                        <Input onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" />
                        <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                        <Action onClick={signIn} color={ComponentHovereableColor.SUCCESS}>Login</Action>
                        <Action onClick={createUser} color={ComponentHovereableColor.SUCCESS}>Create user</Action>
                    </Section>
                </form>
            )}
            <LogoutButton />
        </div>
    );
};

export default AuthPage;