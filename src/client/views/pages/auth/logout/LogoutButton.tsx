import Action from "client/common/atom/action/Action";
import { IconLogout } from "@components/svg/Svg";
import useFirebaseUser from "@hooks/useFirebaseUser";
import { FunctionComponent } from "react";

interface LogoutButtonProps {

}

const LogoutButton: FunctionComponent<LogoutButtonProps> = () => {
    const user = useFirebaseUser();

    return user && user.data ? (
        <Action
            onClick={user.signOut}
            revert
            className="mx-2 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between transition-all duration-300 dark:text-red-200 hover:bg-red-500 dark:hover:bg-red-600 hover:text-white"
        >
            <span>Logout</span>
            <IconLogout />
        </Action>
    ) : null;
}

export default LogoutButton;