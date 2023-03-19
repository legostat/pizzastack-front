import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterLink } from "@app/common/components/footer-link/footer-link.component";

export default {
  title: "Common/Footer Link",
  component: FooterLink,
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <FooterLink {...args} />
);

export const View = Template.bind({});

View.args = {
  href: "tel:+380441234567",
  children: "044 123 45 67",
};
