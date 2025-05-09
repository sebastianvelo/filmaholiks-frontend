import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import ActionModel from "shared/model/atom/ActionModel";
import { MouseEventHandler } from "react";

export default interface ActionProps extends ActionModel {
  className?: string;
  color?: ComponentHovereableColor;
  revert?: boolean;
  onClick?: MouseEventHandler<any>;
  onMouseEnter?: MouseEventHandler<any>;
  onMouseLeave?: MouseEventHandler<any>;
  children?: React.ReactNode | React.ReactNode[];
  ariaLabel?: string;
  disabled?: boolean;
}
