import { FunctionComponent } from "react";

const Spinner: FunctionComponent<{}> = () => {
    return (
        <div className={'ease-linear rounded-full h-20 w-20 relative border-4 border-primary-light'}>
            <div className={'ease-linear rounded-full h-20 w-20 absolute -top-1 -left-1 border-t-8 border-b-0 border-l-4 border-r-0 border-primary-dark animate-spin'}>
            </div>
        </div>
    );
}

export default Spinner;