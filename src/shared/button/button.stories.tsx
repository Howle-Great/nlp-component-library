import { Button } from "@mui/material";
import React from "react";
// import Button, { ButtonProps } from "./Button";
import { StyledButton } from "./button.ts";

export default {
  title: "Components/StyledButton",
  component: StyledButton,
};

const Template = () => <StyledButton>BTN</StyledButton>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
// Primary.args = { label: "Primary 😃", size: "large" };

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇"