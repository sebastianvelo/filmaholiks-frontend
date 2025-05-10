import Tailwind from "@tailwind-helper/Tailwind";

export type SlideDirection = "left" | "right" | "top" | "bottom" | "none";

export const getAnimationClasses = (slideDirection: SlideDirection, transitioning: boolean) => {
    if (slideDirection === "none") {
        return transitioning ? "opacity-0" : "opacity-100";
    }

    const translations = {
        left: transitioning ? "opacity-0 -translate-x-16" : "opacity-100 translate-x-0",
        right: transitioning ? "opacity-0 translate-x-16" : "opacity-100 translate-x-0",
        top: transitioning ? "opacity-0 -translate-y-16" : "opacity-100 translate-y-0",
        bottom: transitioning ? "opacity-0 translate-y-16" : "opacity-100 translate-y-0"
    };

    return translations[slideDirection];
};

export const getButtonClassName = (active: boolean, inline: boolean) => {
    return Tailwind.builder()
        .add("rounded-tr-md rounded-tl-md group z-20 w-full px-3 py-2 transition-all text-sm md:text-base lg:text-lg whitespace-nowrap border-b-4")
        .addIf("bg-secondary-200 dark:bg-primary-900/50 font-bold text-secondary-900 dark:text-primary-300 border-secondary-900 dark:border-primary-300", active)
        .addIf("bg-tertiary-200/80 dark:bg-tertiary-900/80 text-secondary-950 dark:text-primary-100 border-transparent hover:text-secondary-800 dark:hover:text-primary-200 hover:border-secondary-800 dark:hover:border-primary-200", !active)
        .addIf("flex flex-row items-center justify-center gap-2", inline)
        .addIf("flex flex-col items-center justify-between", !inline)
        .build();
}