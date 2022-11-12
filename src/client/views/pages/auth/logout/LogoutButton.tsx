import Action from "client/common/atom/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import useFirebaseUser from "client/hooks/useFirebaseUser";
import { FunctionComponent } from "react";

interface LogoutButtonProps {

}

const LogoutButton: FunctionComponent<LogoutButtonProps> = () => {
    const user = useFirebaseUser();

    return user && user.data ? (
        <Action onClick={user.signOut} color={ComponentHovereableColor.DANGER}>Logout</Action>
    ) : null;
}

export default LogoutButton;