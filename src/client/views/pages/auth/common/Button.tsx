import Action from "@atom/action/Action";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    revert?: boolean;
    variant?: "primary" | "secondary" | "google";
    color?: ComponentHovereableColor;
}
export const Button: React.FC<ButtonProps> = ({
    onClick, children, disabled = false, className = "", revert = false, variant = "primary", color
}) => {
    // Si se proporciona color (propiedad legacy), usamos eso
    if (color !== undefined) {
        return (
            <Action
                onClick={onClick}
                color={color}
                disabled={disabled}
                className={`w-full px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-200 ${className}`}
                revert={revert}
            >
                {children}
            </Action>
        );
    }

    // Si no hay color, usamos el sistema de variantes
    let variantStyles = "";
    if (variant === "primary") {
        variantStyles = revert
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white";
    } else if (variant === "secondary") {
        variantStyles = revert
            ? "bg-gray-700 hover:bg-gray-800 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800";
    } else if (variant === "google") {
        variantStyles = revert
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300";
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full px-4 py-3 rounded-lg font-medium flex items-center justify-center ${variantStyles} transition-all duration-200 ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
        >
            {children}
        </button>
    );
};
