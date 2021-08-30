import React from "react";
import { PostStatusTag } from "./PostStatusTag";

export default {
  title: "Secho/PostStatusTag",
  component: PostStatusTag,
  argTypes: {
    backgroundColor: { control: "color" },
    fontSize: { control: "range", min: 1, max: 50, step: 1 },
    borderRadius: { control: "range", min: 0, max: 50, step: 1 },
    width: {
      control: { type: "range", min: 30, max: 150, step: 10 },
    },
    size: { control: "text" },
    label: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "",
      description: "이 컴포넌트는 진행중라벨 컴포넌트입니당",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Hello" },
      },
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <PostStatusTag {...args} />;
export const progress = Template.bind({});
progress.args = {
  progress: true,
  fontSize: 1,
  width: 30,
  size: "small",
  // borderRadius: "1px",
};

export const done = Template.bind({});
done.args = {
  done: true,
};

export const expired = Template.bind({});
expired.args = {
  expired: true,
};
