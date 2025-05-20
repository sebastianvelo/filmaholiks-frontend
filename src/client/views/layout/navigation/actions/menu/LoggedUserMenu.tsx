import ActionProps from "@atom/action/ActionProps";
import Image, { ImageProps } from "@atom/image/Image";
import Dropdown from "@components/dropdown/Dropdown";
import Tailwind from "@tailwind-helper/Tailwind";
import LogoutButton from "client/views/pages/auth/logout/LogoutButton";
import LoggedUserMenuOption from "./LoggedUserMenuOption";

export interface LoggedUserMenuProps {
    toggler: ImageProps;
    options: ActionProps[];
}

const LoggedUserMenu: React.FC<LoggedUserMenuProps> = (props: LoggedUserMenuProps) => {
    const imageClasses = Tailwind.builder()
        .add("h-8 w-8")
        .add("rounded-full")
        .add("shadow-lg")
        .add("ring-2 ring-secondary-500 dark:ring-primary-400")
        .add("ring-offset-2 ring-offset-white dark:ring-offset-black")
        .add("mx-2")
        .add("transition-all duration-300")
        .add("hover:scale-105")
        .add("cursor-pointer")
        .build();

    const dropdownContainerClasses = Tailwind.builder()
        .add("flex flex-col")
        .add("absolute")
        .add("space-y-1")
        .add("z-40")
        .add("right-16 top-8")
        .add("w-56")
        .add("bg-white/90 dark:bg-black/90")
        .add("backdrop-filter backdrop-blur-xl")
        .add("rounded-lg")
        .add("shadow-xl")
        .add("border border-gray-100 dark:border-gray-800")
        .add("transform transition-all duration-300")
        .build();

    const separatorClasses = Tailwind.builder()
        .add("border-t")
        .add("border-gray-200 dark:border-gray-700")
        .add("")
        .build();

    return (
        <Dropdown trigger={<Image className={imageClasses} {...props.toggler} />}>
            <div className={dropdownContainerClasses}>
                {props.options.map((link, index) => (
                    <LoggedUserMenuOption key={`${link.label}-${index}`} {...link} />
                ))}
                <div className={separatorClasses}>
                    <LogoutButton />
                </div>
            </div>
        </Dropdown>
    );
};

export default LoggedUserMenu;