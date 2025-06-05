import Action from "@atom/action/Action";
import { IconMoon, IconSun } from "@components/svg/Svg";
import useToggleDark from "@hooks/useToggleDark";

const ToggleTheme: React.FC = () => {
    const [isDark, toggleTheme] = useToggleDark();

    return (
        <Action onClick={toggleTheme} className="bg-white hover:bg-white/50 hover:text-sky-500 text-secondary-700 focus:ring-secondary-300 dark:bg-black/80 dark:hover:bg-black/50 dark:text-secondary-300 dark:hover:text-yellow-200 rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            {isDark ? <IconSun /> : <IconMoon />}
        </Action>
    );
}

export default ToggleTheme;