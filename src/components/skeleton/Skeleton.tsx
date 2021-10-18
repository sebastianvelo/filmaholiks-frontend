import Tailwind from "client/tailwind/Tailwind";
import { FunctionComponent } from "react";

interface SkeletonProps {
    className: string;
    children: React.ReactNode | React.ReactNode[];
    loading: boolean;
}
 
const Skeleton: FunctionComponent<SkeletonProps> = (props: SkeletonProps) => {
    const className = Tailwind.builder()
        .add('bg-gray-400 animate-pulse rounded-md	')
        .add(props.className)
        .build();

    return props.loading ? <div className={className}></div> : <>{props.children}</>;
}
 
export default Skeleton;