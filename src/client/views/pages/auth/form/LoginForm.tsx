import Input from "client/common/components/form/input/Input";
import ComponentHovereableColor from "client/helper/tailwind/constants/ComponentHovereableColor";
import { Button } from "../common/Button";

interface LoginFormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    signInWithEmail: () => Promise<void>;
    createUser: () => Promise<void>;
    isLoading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, password, setEmail, setPassword, signInWithEmail, createUser, isLoading }) => {
    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Email Input */}
            <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${"dark:text-gray-300 text-gray-700"}`}>
                    Email
                </label>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-Mail" disabled={isLoading} className={"dark:bg-gray-800 dark:border-gray-700 dark:text-white"} />
            </div>

            <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 dark:text-gray-300 text-gray-700"}`}>
                    Contraseña
                </label>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" type="password" disabled={isLoading} className={"dark:bg-gray-800 dark:border-gray-700 dark:text-white"} />
                <div className="text-right mt-1">
                    <a href="#" className={`text-sm dark:text-blue-400 dark:hover:text-blue-300 text-blue-600 hover:text-blue-800`}>
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button onClick={signInWithEmail} disabled={isLoading} color={ComponentHovereableColor.SECONDARY}>
                    {isLoading ? "Cargando..." : "Login"}
                </Button>

                <Button onClick={createUser} disabled={isLoading} color={ComponentHovereableColor.SUCCESS}>
                    {isLoading ? "Cargando..." : "Create user"}
                </Button>
            </div>
        </form>
    );
}

export default LoginForm;