import { FunctionComponent } from "react";
import Spinner from "./spinner/Spinner";

interface LoadingProps {
    loading?: boolean;
    children: React.ReactNode | React.ReactNode[];
}

const Loading: FunctionComponent<LoadingProps> = (props: LoadingProps) => {
    return (
        <>
            {props.loading ? <Spinner /> : props.children}
        </>
    );
}

export default Loading;