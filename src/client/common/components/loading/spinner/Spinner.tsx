import { FunctionComponent } from "react";

const Spinner: FunctionComponent<{}> = () => (
    <div className={'ease-linear rounded-full h-20 w-20 relative border-4 dark:border-primary border-secondary'}>
        <div className={'ease-linear rounded-full h-20 w-20 absolute -top-1 -left-1 border-t-4 border-b-0 border-l-4 border-r-0 border-secondary dark:border-primary animate-spin'}>
        </div>
    </div>
)

export default Spinner;