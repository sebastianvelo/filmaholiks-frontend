import Action, { ActionProps } from "client/common/components/action/Action";
import Dropdown from "client/common/components/dropdown/Dropdown";
import Image, { ImageProps } from "client/common/components/image/Image";

export interface MenuProps {
    toggler: ImageProps;
    options: ActionProps[];
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    return (
        <Dropdown trigger={<Image className={`h-8 w-8 rounded-full shadow-lg ring ring-primary ring-offset-1 ring-offset-dark`} {...props.toggler} />}>
            <div className={`flex flex-col absolute space-y-2 z-50 right-0 top-6 w-52 py-2 bg-dark rounded-md px-2`}>
                {props.options.map((link, index) => <Action key={index} {...link}>{link.label}</Action>)}
            </div>
        </Dropdown>
    );
}

export default Menu;