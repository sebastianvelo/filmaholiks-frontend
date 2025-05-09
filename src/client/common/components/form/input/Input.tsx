import { useState, FunctionComponent, useRef, useEffect } from "react";

interface ModernInputProps {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: any) => void;
    revert?: boolean;
    type?: string;
    onClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    autoFocus?: boolean;
}

const Input: FunctionComponent<ModernInputProps> = (props: ModernInputProps) => {
    // Estados para manejar interacciones
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(!!props.value);
    const inputRef = useRef<HTMLInputElement>(null);

    // Efecto para autofocus si se solicita
    useEffect(() => {
        if (props.autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [props.autoFocus]);

    // Monitorear cambios en el valor para actualizar el estado de contenido
    useEffect(() => {
        setHasContent(!!props.value && props.value.length > 0);
    }, [props.value]);

    // Manejar el evento de cambio y opcionalmente llamar al onChange del padre
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasContent(e.target.value.length > 0);
        if (props.onChange) {
            props.onChange(e);
        }
    };

    // Manejar el evento de foco
    const handleFocus = () => {
        setIsFocused(true);
        if (props.onFocus) {
            props.onFocus();
        }
    };

    // Manejar el evento de pérdida de foco
    const handleBlur = () => {
        setIsFocused(false);
        if (props.onBlur) {
            props.onBlur();
        }
    };

    // Manejar el evento de limpieza del campo
    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
            setHasContent(false);

            // Disparar un evento de cambio para notificar al padre
            const event = new Event('input', { bubbles: true });
            inputRef.current.dispatchEvent(event);

            if (props.onClear) {
                props.onClear();
            }

            // Mantener el foco después de limpiar
            inputRef.current.focus();
        }
    };

    return (
        <div className="relative w-full group">
            {/* Efecto decorativo de fondo */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300 ${isFocused ? 'opacity-75' : ''}`}></div>

            {/* Contenedor principal del input */}
            <div className={`relative flex items-center w-full rounded-lg backdrop-blur-lg ${isFocused
                ? 'bg-white/10 dark:bg-black/30 shadow-lg'
                : 'bg-white/5 dark:bg-black/20'
                } transition-all duration-300 border ${isFocused
                    ? 'border-blue-500/50 dark:border-purple-500/50'
                    : 'border-white/10 dark:border-gray-700/30'
                } overflow-hidden`}>
                {/* Icono de búsqueda */}
                <div className="flex items-center justify-center h-full pl-4">
                    <svg
                        className={`w-5 h-5 ${isFocused
                            ? 'text-blue-400 dark:text-purple-400'
                            : 'text-gray-400 dark:text-gray-500'
                            } transition-colors duration-300`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Input real */}
                <input
                    ref={inputRef}
                    type={props.type || "text"}
                    value={props.value}
                    placeholder={props.placeholder || "Buscar..."}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-full py-3 px-3 bg-transparent text-white dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none text-base md:text-lg ${props.className || ''}`}
                    spellCheck="false"
                    autoComplete="off"
                />

                {/* Botón de limpiar, solo visible cuando hay contenido */}
                {hasContent && (
                    <button
                        onClick={handleClear}
                        className="flex items-center justify-center h-full px-4 text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors duration-200"
                        type="button"
                        aria-label="Limpiar búsqueda"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                {/* Indicador de carga animado (opcional, comentado) */}
                {/* 
        <div className="flex items-center justify-center h-full px-4">
          <div className="w-5 h-5 border-2 border-t-2 border-blue-500 dark:border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        */}
            </div>

            {/* Elementos decorativos (reflejo) */}
            <div className={`absolute -bottom-1 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 dark:via-purple-500 to-transparent opacity-0 ${isFocused ? 'opacity-50' : ''} transition-opacity duration-300`}></div>
        </div>
    );
};

export default Input;