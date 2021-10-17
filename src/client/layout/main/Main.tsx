import Page from "@client/util/page/Page";
import useScrollTop from "client/hooks/useScrollTop";
import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

const getJSX = (Component: React.FC<any>, props: any) => <Component {...props} />;
export interface MainProps {
    pages: Page<any>[];
}

const Main: FunctionComponent<MainProps> = (props: MainProps) => {
    useScrollTop();

    return (
        <main>
            <Switch>
                {props.pages.map((page: Page<any>, i: number) => (
                    <Route key={i} exact path={page.route}>
                        {getJSX(page.component, page.props)}
                    </Route>
                ))}
            </Switch>
        </main>
    );
}

export default Main;