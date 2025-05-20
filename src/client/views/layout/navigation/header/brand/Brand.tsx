import Tailwind from "@tailwind-helper/Tailwind";

export interface BrandProps {
    header?: string;
}

const Brand: React.FC<BrandProps> = (props: BrandProps) => {
    const className = Tailwind.builder()
        .add("bg-clip-text font-bold text-transparent bg-gradient-to-bl")
        .add("from-secondary-950 via-secondary-700 to-secondary-950")
        .add("dark:from-primary-400 dark:via-primary-400 dark:to-primary-100");

    const widest = Tailwind.builder()
        .copy(className)
        .add("group-hover:tracking-wide transition-letter-spacing duration-200 ease-in")
        .build();

    const tight = Tailwind.builder()
        .copy(className)
        .add("group-hover:tracking-tight transition-letter-spacing duration-200 ease-in")
        .build();

    return (
        <header className="group text-3xl md:text-4xl brand cursor-pointer font-brand">
            <span className={widest}>Film</span>
            <span className={tight}>aho</span>
            <span className={tight}>liks</span>
        </header>
    );
}

export default Brand;