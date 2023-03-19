import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuItem } from "@app/modules/components/menu-item/menu-item.component";

export default {
  title: "Menu/MenuItem",
  component: MenuItem,
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-6">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});

View.args = {
  imagePath: "/assets/pizza/manhattan.jpeg",
  weight: 500,
  title: "Піца Мангеттен",
  ingredients:
    "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо",
  price: 215,
};
