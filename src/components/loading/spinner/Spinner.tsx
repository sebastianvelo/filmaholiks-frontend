import { FunctionComponent } from "react";
import ComponentStyle from "style/ComponentStyle";

const Spinner: FunctionComponent<{}> = () => {
    return (
        <div className={ComponentStyle.SPINNER_OUTER}>
            <div className={ComponentStyle.SPINNER_INNER}>
            </div>
        </div>
    );
}

export default Spinner;