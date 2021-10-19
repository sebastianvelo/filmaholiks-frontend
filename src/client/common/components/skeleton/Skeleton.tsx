import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

interface SkeletonProps {
    className: string;
    children: React.ReactNode | React.ReactNode[];
    loading?: boolean;
}
 
const Skeleton: FunctionComponent<SkeletonProps> = (props: SkeletonProps) => {
    const className = Tailwind.builder()
        .add('bg-primary-light animate-pulse rounded-md')
        .add(props.className)
        .build();

    return props.loading ? <div className={className}></div> : <>{props.children}</>;
}
 
export default Skeleton;