import React from "react";
import { CustomButtonStyles } from "./custum-button.styles";
const CustomButton = ({
  children,

  ...otherProps
}) => <CustomButtonStyles {...otherProps}>{children}</CustomButtonStyles>;
export default CustomButton;
