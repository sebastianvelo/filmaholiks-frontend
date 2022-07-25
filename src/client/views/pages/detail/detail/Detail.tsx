import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import { FunctionComponent } from "react";
import DetailBody, { DetailBodyProps } from "./body/DetailBody";
import DetailPosters, { DetailPostersProps } from "./posters/DetailPosters";

export interface DetailProps extends DetailPostersProps, DetailBodyProps {
    actions?: ActionProps[];
}

const Detail: FunctionComponent<DetailProps> = (props: DetailProps) => (
    <>
        <div className={`flex flex-col md:flex-row w-full `}  >
            <DetailPosters {...props} />
            <DetailBody {...props} />
        </div>
        <div className={`justify-items-stretch grid grid-cols-1 lg:grid-cols-2 divide-y divide-primary-dark lg:divide-y-0`}>
            {props.actions?.map((action, index) => <Action key={index} {...action} />)}
        </div>
    </>
)

export default Detail;