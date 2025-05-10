import Action from "@atom/action/Action";
import ActionProps from "@atom/action/ActionProps";
import Dropdown from "@components/dropdown/Dropdown";
import Image, { ImageProps } from "@atom/image/Image";
import LogoutButton from "client/views/pages/auth/logout/LogoutButton";

export interface MenuProps {
    toggler: ImageProps;
    options: ActionProps[];
}

const NavigationMenu: React.FC<MenuProps> = (props: MenuProps) => true ? (
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
                <Action
                    key={index}
                    {...link}
                    revert
                    className="mx-2 px-3 py-2 rounded-md text-sm font-bold transition-colors dark:text-white bg-secondary-300 hover:bg-secondary-400 dark:bg-primary-700 dark:hover:bg-primary-900"
                >
                    {link.label}
                </Action>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-1 pt-1">
                <LogoutButton />
            </div>
        </div>
    </Dropdown>
) : <></>;

export default NavigationMenu;