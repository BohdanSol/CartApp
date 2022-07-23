import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyButton } from './Button';

export default {
  title: 'components/Button',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Basic: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} />
);

Basic.args = {
  text: 'Order Now',
  color: 'green',
  disabled: false,
};

export const Disabled: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} />
);

Disabled.args = {
  text: 'Order Now',
  color: 'green',
  disabled: true,
};

