import Action from "client/common/atom/action/Action";
import { MoonSvg, SunSvg } from "client/common/components/svg/Svg";
import useToggleDark from "client/hooks/useToggleDark";

const ToggleTheme: React.FC = () => {
    const [isDark, toggleTheme] = useToggleDark();

    return (
        <Action onClick={toggleTheme} className="rounded-lg text-tertiary-800 dark:text-tertiary-200 bg-tertiary-900/10 dark:bg-tertiary-800 hover:bg-tertiary-300 dark:hover:bg-tertiary-700 transition-colors focus:outline-none" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            {isDark ? <SunSvg /> : <MoonSvg />}
        </Action>
    );
}

export default ToggleTheme;