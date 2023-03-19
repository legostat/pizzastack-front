import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import pizzaMenu from "@app/mocks/pizza.json";

import { MenuList } from "./menu-list.component";

export default {
  title: "Menu/Menu List",
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args} />
);

export const View = Template.bind({});

View.args = {
  items: pizzaMenu,
};
