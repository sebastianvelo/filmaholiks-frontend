import Action from "@atom/action/Action";
import ActionProps from "@atom/action/ActionProps";

export interface ErrorPageProps {
    code: number;
    message: string;
    actions?: ActionProps[];
}

const ErrorPage: React.FC<ErrorPageProps> = (props: ErrorPageProps) => (
        <div className={`flex justify-center items-center py-10`}>
            <div className={`bg-dark w-full md:w-1/2 p-3 rounded-md shadow-md space-y-4`}>
                <h1 className={`text-red-600 text-4xl text-center`}>{props.code}</h1>
                <p className={`text-xl`}>{props.message}</p>
                <div className={`flex justify-center`}>
                    {props.actions?.map((action, index) => <Action key={index} {...action} />)}
                </div>
            </div>
        </div>
    )

export default ErrorPage;