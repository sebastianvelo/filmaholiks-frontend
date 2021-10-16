import useToggleDark from "client/hooks/useToggleDark";
import Action from "components/action/Action";
import Dropdown from "components/dropdown/Dropdown";
import Input from "components/form/input/Input";
import Loading from "components/loading/Loading";
import Pill from "components/pill/Pill";
import Table from "components/table/Table";
import Tabs from "components/tabs/Tabs";
import { FunctionComponent, useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
import ComponentColor from "style/tailwind/constants/ComponentColor";

const tablemock = {
    columns: ["Column1", "Column2", "Column3",],
    rows: [["CellA1", "CellA2", "CellA3"], ["CellA1", "CellA2", "CellA3"], ["CellA1", "CellA2", "CellA3"]]
}

const tabsMock = [
    {
        label: 'Tab1',
        content: <Pill label="NUEVO" color={ComponentColor.DARK}/>,
    },
    {
        label: 'Tab2',
        content: <Pill label="TAB 2" color={ComponentColor.DANGER}/>,
    },
    {
        label: 'Tab3',
        content: <Pill label="TAB 3" color={ComponentColor.SUCCESS}/>,
    },
    {
        label: 'Tab4',
        content: <Pill label="TAB 4" />,
    },

]

interface MainProps {

}

const Main: FunctionComponent<MainProps> = () => {
    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        return () => unlisten();
    }, [history]);

    return (
        <main>
            <Action label="Toggle" color={ComponentColor.PRIMARY} onClick={useToggleDark}/>
            <Tabs tabs={tabsMock}></Tabs>

            <Loading loading={false}>
                <Dropdown
                    trigger={<Action label="Dropdown trigger" color={ComponentColor.PRIMARY} />}
                    content={<Table {...tablemock} />}
                />
            </Loading>
            <Input placeholder={'QUE ONDAAA'} />
            <Switch>

            </Switch>
        </main>
    );
}

export default Main;