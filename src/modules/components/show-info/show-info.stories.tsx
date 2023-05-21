import { ShowInfo } from "@app/modules/components/show-info/show-info.component";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Common/Info",
  component: ShowInfo,
} as ComponentMeta<typeof ShowInfo>;

const Template: ComponentStory<typeof ShowInfo> = (args) => (
  <ShowInfo {...args} />
);

export const Error = Template.bind({});

Error.args = {
  type: "error",
  children: (
    <>
      <h2 className="font-bold text-xl mb-2">Упс... Сталася помилка.</h2>
      <p className="font-medium">Спробуйте пізніше.</p>
    </>
  ),
};

export const Info = Template.bind({});

Info.args = {
  type: "info",
  children: (
    <>
      <p className="font-medium">Нажаль меню пусте.</p>
    </>
  ),
};
