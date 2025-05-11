import Tailwind from "@tailwind-helper/Tailwind";

interface SkeletonProps {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
    loading?: boolean;
}
 
const Skeleton: React.FC<SkeletonProps> = (props: SkeletonProps) => {
    const className = Tailwind.builder()
        .add('bg-primary-100 animate-pulse rounded-md')
        .add(props.className)
        .build();

    return props.loading ? <div className={className}></div> : <>{props.children}</>;
}
 
export default Skeleton;