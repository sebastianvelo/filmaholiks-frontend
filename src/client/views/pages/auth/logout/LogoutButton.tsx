import Action from "@atom/action/Action";
import { IconLogout } from "@components/svg/Svg";
import useAuth from "@hooks/useAuth";
import Tailwind from "@tailwind-helper/Tailwind";

interface LogoutButtonProps { }

const LogoutButton: React.FC<LogoutButtonProps> = () => {
    const user = useAuth();

    const buttonClasses = Tailwind.builder()
        .add("w-full")
        .add("border border-red-500")
        .add("px-3 py-2")
        .add("rounded-md")
        .add("text-sm font-medium")
        .add("flex items-center justify-between")
        .add("transition-all duration-300")
        .add("text-red-500 dark:text-red-500")
        .add("hover:bg-red-500 dark:hover:bg-red-600")
        .add("hover:text-white dark:hover:text-white")
        .build();

    return user && user.user ? (
        <Action onClick={user.signOut} revert className={buttonClasses}>
            <span>Logout</span>
            <IconLogout />
        </Action>
    ) : null;
}

export default LogoutButton;