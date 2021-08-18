import React from "react";
import { HamburgerMenuModal } from "./HamburgerMenuModal";

export default {
  title: "Secho/HamburgerMenuModal",
  component: HamburgerMenuModal,
  argTypes: {
    backgroundColor: { control: "color" },
    fontSize: { control: "range" },
  },
};

const Template = (args) => <HamburgerMenuModal {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
