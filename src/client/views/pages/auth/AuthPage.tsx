import UserRequest from "api/request/user/UserRequest";
import Action from "client/common/atom/action/Action";
import Input from "client/common/components/form/input/Input";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import useFirebaseUser from "@hooks/useFirebaseUser";
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

    const signInWithEmail = async () => {
        const credentials = await user.signIn(email, password)

        if (!credentials.user?.displayName) {
            await credentials.user!.updateProfile({
                displayName: email.split("@")[0]
            });
        }
    };

    const signInWithGoogle = async () => {
        try {
            const credentials = await user.signInWithGoogle();
            if (credentials.user?.email) {
                const dbUser = await UserRequest.getByEmail(credentials.user?.email);
                if (!dbUser)
                    await UserRequest.save(credentials.user.email);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const createUser = async () => {
        const savedUser = await UserRequest.save(email);
        const credentials = await user.createUser(email, password)
        await credentials.user!.updateProfile({
            displayName: savedUser.userName,
            photoURL: savedUser.avatar
        });
    }

    if (user.data)
        return <Redirect to={PageRouteBuilder.USER_DETAIL(user.data.userName)} />;


    return (
        <div className="">
            {!user || !user.data && (
                <div className="grid place-items-center w-screen space-y-8">
                    <Action onClick={signInWithGoogle} color={ComponentHovereableColor.INFO}>Sign-in with Google</Action>
                    <form className="w-1/3">
                        <Section title="Login">
                            <Input onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" />
                            <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                            <div className="flex justify-between">
                                <Action onClick={signInWithEmail} color={ComponentHovereableColor.PRIMARY}>Login</Action>
                                <Action onClick={createUser} color={ComponentHovereableColor.SUCCESS}>Create user</Action>
                            </div>
                        </Section>
                    </form>
                </div>
            )}
            <LogoutButton />
        </div>
    );
};

export default AuthPage;