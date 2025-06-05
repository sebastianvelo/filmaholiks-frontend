import Action from "@atom/action/Action";
import { IconLogout } from "@components/svg/Svg";
import useAuth from "@hooks/useAuth";
import Tailwind from "@tailwind-helper/Tailwind";

interface LogoutButtonProps {
    onLogout?: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
    const user = useAuth();

    const buttonClasses = Tailwind.builder()
        .add("w-full px-3 py-2.5")
        .add("rounded-lg")
        .add("text-sm font-medium")
        .add("text-red-600 dark:text-red-400")
        .add("transition-all duration-200 ease-out")
        .add("hover:bg-red-50 dark:hover:bg-red-900/20")
        .add("hover:text-red-700 dark:hover:text-red-300")
        .add("active:scale-95")
        .add("flex items-center justify-between")
        .add("group")
        .build();

    const iconClasses = Tailwind.builder()
        .add("w-4 h-4")
        .add("text-red-500 dark:text-red-400")
        .add("group-hover:text-red-600 dark:group-hover:text-red-300")
        .add("transition-colors duration-200")
        .build();

    const handleLogout = () => {
        if (user?.signOut) {
            user.signOut();
        }
        if (onLogout) {
            onLogout();
        }
    };

    return user && user.user ? (
        <Action onClick={handleLogout} revert className={buttonClasses}>
            <span>Sign out</span>
            <div className={iconClasses}>
                <IconLogout />
            </div>
        </Action>
    ) : null;
};

export default LogoutButton;