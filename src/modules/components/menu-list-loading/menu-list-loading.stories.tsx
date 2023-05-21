import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuListLoading } from "@app/modules/components/menu-list-loading/menu-list-loading.component";

export default {
  title: "Menu/Menu List Loading",
  component: MenuListLoading,
} as ComponentMeta<typeof MenuListLoading>;

const Template: ComponentStory<typeof MenuListLoading> = (args) => (
  <MenuListLoading {...args} />
);

export const View = Template.bind({});

View.args = {
  items: 3,
};
