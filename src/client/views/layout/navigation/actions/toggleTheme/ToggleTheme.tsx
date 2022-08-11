import Action from "client/common/components/action/Action";
import { SunSvg, MoonSvg } from "client/common/components/svg/Svg";
import useToggleDark from "client/hooks/useToggleDark";
import { FunctionComponent } from "react";

const ToggleTheme: FunctionComponent<any> = () => {
    const [isDark, toggleTheme] = useToggleDark();
    return (
        <Action className="h-16 w-16 text-blue-900 dark:text-yellow-300 transform rotate-45" onClick={toggleTheme}>
            {isDark ? <SunSvg /> : <MoonSvg />}
        </Action>
    );
}

export default ToggleTheme;