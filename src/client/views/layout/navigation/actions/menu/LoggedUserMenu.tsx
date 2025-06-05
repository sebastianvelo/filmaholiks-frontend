import ActionProps from "@atom/action/ActionProps";
import Image, { ImageProps } from "@atom/image/Image";
import Tailwind from "@tailwind-helper/Tailwind";
import useClickOutside from 'client/hooks/useClickOutside';
import LogoutButton from "client/views/pages/auth/logout/LogoutButton";
import React, { useRef, useState } from 'react';
import LoggedUserMenuOption from "./LoggedUserMenuOption";

export interface LoggedUserMenuProps {
    toggler: ImageProps;
    options: ActionProps[];
}

const LoggedUserMenu: React.FC<LoggedUserMenuProps> = (props: LoggedUserMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setIsOpen(false));

    const imageClasses = Tailwind.builder()
        .add("h-10 w-10")
        .add("rounded-full")
        .add("shadow-lg")
        .add("ring-2 ring-offset-2")
        .add("ring-primary-500/30 dark:ring-primary-400/30")
        .add("ring-offset-white dark:ring-offset-gray-900")
        .add("transition-all duration-300 ease-out")
        .add("hover:scale-110 hover:shadow-xl")
        .add("hover:ring-primary-500/50 dark:hover:ring-primary-400/50")
        .add("cursor-pointer")
        .add("select-none")
        .build();

    const dropdownContainerClasses = Tailwind.builder()
        .add("absolute right-0 top-12")
        .add("w-64")
        .add("bg-white/95 dark:bg-gray-800/95")
        .add("backdrop-blur-md")
        .add("rounded-xl")
        .add("shadow-2xl")
        .add("border border-gray-200/50 dark:border-gray-700/50")
        .add("p-2")
        .add("z-50")
        .add("transform transition-all duration-200 ease-out")
        .add("origin-top-right")
        .add(isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none")
        .build();

    const headerClasses = Tailwind.builder()
        .add("px-3 py-2 mb-2")
        .add("border-b border-gray-200/50 dark:border-gray-700/50")
        .add("text-xs font-medium text-gray-500 dark:text-gray-400")
        .add("uppercase tracking-wider")
        .build();

    const separatorClasses = Tailwind.builder()
        .add("my-2")
        .add("border-t border-gray-200/50 dark:border-gray-700/50")
        .build();

    return (
        <div className="relative" ref={menuRef}>
            <div onClick={() => setIsOpen(!isOpen)}>
                <Image className={imageClasses} {...props.toggler} />
            </div>

            <div className={dropdownContainerClasses}>
                <div className={headerClasses}>
                    Account
                </div>

                <div className="space-y-1">
                    {props.options.map((option, index) => (
                        <LoggedUserMenuOption
                            key={`${option.label}-${index}`}
                            {...option}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        />
                    ))}
                </div>

                <div className={separatorClasses} />

                <LogoutButton onLogout={() => setIsOpen(false)} />
            </div>
        </div>
    );
};

export default LoggedUserMenu;