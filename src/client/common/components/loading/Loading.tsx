import Spinner from "./spinner/Spinner";

interface LoadingProps {
    loading?: boolean;
    children: React.ReactNode | React.ReactNode[];
}

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => (
    <>
        {props.loading ? <Spinner /> : props.children}
    </>
)

export default Loading;