import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuItemLoading } from "@app/modules/components/menu-item-loading/menu-item-loading.component";

export default {
  title: "Menu/Menu Item Loading",
  component: MenuItemLoading,
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-6">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuItemLoading>;

const Template: ComponentStory<typeof MenuItemLoading> = () => (
  <MenuItemLoading />
);

export const View = Template.bind({});
