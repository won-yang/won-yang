// Button.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MyButton, MyButtonProps } from './MyButton';

// storybook ui에 보여질 것들
export default {
  title: 'components/MyButton',
  component: MyButton,
  decorators: [ // 컴포넌트를 래필할 때 사용됨.
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      description: 'my First Story Component',
      table: {
        type: {
          summary: 'this is summary',
          detail: 'this is detail',
        },
      },
      control: {
        type: 'range',
      },
    },
    variant: {
      option: ['primary', 'secondary'],
      control: { type: 'range' },
    },
    backgroundColor: { control: 'color' },
  },
} as Meta;

//We create a “template” of how args map to rendering
//args가 랜더링에 매핑되는 방법에 대한 템플릿을 만든다.
// 템플릿을 만들고 거기에 해당하는 args를 따로따로 만들어서 코드의 중복을 줄일 수 있다.
const Template: Story<MyButtonProps> = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'isLabel',
  variant: 'primary',
};
// 스토리안에 여러 컴포넌트들을 작성할 수 있다.
export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'secondaryLabel',
  variant: 'secondary',
};
