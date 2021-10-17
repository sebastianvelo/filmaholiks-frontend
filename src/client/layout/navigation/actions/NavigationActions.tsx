import Action, { ActionProps } from "components/action/Action";
import { FunctionComponent } from "react";
import ComponentStyle from "style/ComponentStyle";

export interface NavigationActionsProps {
  actions?: ActionProps[];
}

const NavigationActions: FunctionComponent<NavigationActionsProps> = (props: NavigationActionsProps) => {
  return (
    <div className={ComponentStyle.NAVIGATION_ACTIONS}>
      {props.actions?.map((action) => (
        <Action {...action} key={action.label} />
      ))}
    </div>
  );
};

export default NavigationActions;
