import ActionProps from "@atom/action/ActionProps";
import Image, { ImageProps } from "@atom/image/Image";
import Dropdown from "@components/dropdown/Dropdown";
import LogoutButton from "client/views/pages/auth/logout/LogoutButton";
import LoggedUserMenuOption from "./LoggedUserMenuOption";

export interface LoggedUserMenuProps {
    toggler: ImageProps;
    options: ActionProps[];
}

const LoggedUserMenu: React.FC<LoggedUserMenuProps> = (props: LoggedUserMenuProps) => (
    <Dropdown trigger={
        <Image
            className={`h-8 w-8 rounded-full shadow-lg ring-2 ring-secondary-500 dark:ring-primary-400 
            ring-offset-2 ring-offset-white dark:ring-offset-black mx-2 
            transition-all duration-300 hover:scale-105 cursor-pointer`}
            {...props.toggler}
        />
    }>
        <div className={`flex flex-col absolute space-y-1 z-40 right-16 top-8 w-56 py-3 
            bg-white/90 dark:bg-black/90 backdrop-filter backdrop-blur-xl 
            rounded-lg shadow-xl border border-gray-100 dark:border-gray-800
            transform transition-all duration-300`}>
            {props.options.map((link, index) => (
                <LoggedUserMenuOption key={`${link.label}-${index}`} {...link} />
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 p-2">
                <LogoutButton />
            </div>
        </div>
    </Dropdown>
);

export default LoggedUserMenu;