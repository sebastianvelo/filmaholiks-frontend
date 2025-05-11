import Tailwind from "@tailwind-helper/Tailwind";

interface HeadlineProps {
    children: string | React.ReactNode;
    className?: string;
    revert?: boolean;
}

const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
    const className = Tailwind.builder()
        .add('font-bold')
        .add(props.className)
        .addIf("text-secondary-950 dark:text-primary-100", !props.revert)
        .addIf(`text-xl`, !props.className)
        .build();
        
    return (<h1 className={className}>{props.children}</h1>);
}

export default Headline;