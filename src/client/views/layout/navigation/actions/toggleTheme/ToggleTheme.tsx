import Action from "client/common/atom/action/Action";
import { SunSvg, MoonSvg } from "client/common/components/svg/Svg";
import useToggleDark from "client/hooks/useToggleDark";
import { FunctionComponent } from "react";

const ToggleTheme: FunctionComponent<any> = () => {
    const [isDark, toggleTheme] = useToggleDark();
    return (
        <Action className="h-18 w-18 text-secondary dark:text-yellow-300 transform rotate-45" onClick={toggleTheme}>
            {isDark ? <SunSvg /> : <MoonSvg />}
        </Action>
    );
}

export default ToggleTheme;