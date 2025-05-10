import useAuth from "@hooks/useAuth";
import { FunctionComponent } from "react";
import { Redirect } from "react-router";
import { PageRouteBuilder } from "shared/routes/PageRoute";
import LoginForm from "./form/LoginForm";
import GoogleLoginButton from "./google-login/GoogleLoginButton";

export interface AuthPageProps { }

const AuthPage: FunctionComponent<AuthPageProps> = () => {
    const {
        user,
        isLoading,
        email,
        password,
        setEmail,
        setPassword,
        signInWithEmail,
        signInWithGoogle,
        createUser
    } = useAuth();

    if (user) {
        return <Redirect to={PageRouteBuilder.USER_DETAIL(user.userName)} />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            {!user && (
                <div className={`w-full max-w-md mx-auto p-6 rounded-xl shadow-xl ${"dark:bg-tertiary-900 dark:text-white bg-white text-tertiary-900"}`}>
                    <div className="mb-6 flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Login</h1>
                    </div>
                    <div className="space-y-4">
                        <GoogleLoginButton signInWithGoogle={signInWithGoogle} isLoading={isLoading} />
                        <div className="flex items-center my-4">
                            <div className={`flex-1 h-px ${"dark:bg-tertiary-700 bg-tertiary-300"}`}></div>
                            <p className="mx-4 text-sm text-tertiary-500">o continúa con</p>
                            <div className={`flex-1 h-px ${"dark:bg-tertiary-700 bg-tertiary-300"}`}></div>
                        </div>
                        <LoginForm
                            email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            signInWithEmail={signInWithEmail}
                            isLoading={isLoading}
                            createUser={createUser}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthPage;