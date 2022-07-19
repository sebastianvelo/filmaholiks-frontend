import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { MouseEventHandler } from "react";

export default interface ActionProps {
  path?: string;
  label?: string;
  className?: string;
  exact?: boolean;
  color?: ComponentHovereableColor;
  revert?: boolean;
  onClick?: MouseEventHandler<any>;
  children?: React.ReactNode | React.ReactNode[];
  ariaLabel?: string;
  disabled?: boolean;
}
