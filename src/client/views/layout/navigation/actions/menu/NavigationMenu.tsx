import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import Dropdown from "client/common/components/dropdown/Dropdown";
import Image, { ImageProps } from "client/common/components/image/Image";

export interface MenuProps {
    toggler: ImageProps;
    options: ActionProps[];
}

const NavigationMenu: React.FC<MenuProps> = (props: MenuProps) => true ? (
    <Dropdown trigger={<Image className={`h-8 w-8 rounded-full shadow-lg ring ring-secondary dark:ring-primary ring-offset-1 ring-offset-dark mx-2`} {...props.toggler} />}>
        <div className={`flex flex-col absolute space-y-2 z-40 right-0 top-12 w-52 py-2 bg-white bg-opacity-50 dark:bg-black backdrop-filter backdrop-blur-md dark:bg-opacity-50 rounded-md px-2`}>
            {props.options.map((link, index) => (
                <Action key={index} {...link}>{link.label}</Action>
            ))}
        </div>
    </Dropdown>
) : <></>;

export default NavigationMenu;