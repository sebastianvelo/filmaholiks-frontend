import { IconGoogle } from "client/common/components/svg/Svg";
import { Button } from "../common/Button";

interface GoogleLoginButtonProps {
    signInWithGoogle: () => Promise<void>;
    isLoading: boolean;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ signInWithGoogle, isLoading }) => {
    return (
        <Button onClick={signInWithGoogle} disabled={isLoading} variant="google" className="mb-6">
            <IconGoogle />
            {isLoading ? "Cargando..." : "Sign-in with Google"}
        </Button>
    );
}

export default GoogleLoginButton;