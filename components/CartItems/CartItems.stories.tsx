import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CartItems } from './CartItems';
import { DUMMY_ITEMS } from './data';

export default {
  title: 'components/CartItems',
  component: CartItems,
} as ComponentMeta<typeof CartItems>;

export const Fulfilled: ComponentStory<typeof CartItems> = args => (
  <CartItems {...args} />
);

Fulfilled.args = {
  items: DUMMY_ITEMS,
  loading: false,
  isEmpty: false,
};

export const Empty: ComponentStory<typeof CartItems> = args => (
  <CartItems {...args} />
);

Empty.args = {
  items: [],
  loading: false,
  isEmpty: true,
};

export const Loading: ComponentStory<typeof CartItems> = args => (
  <CartItems {...args} />
);

Loading.args = {
  items: [],
  loading: true,
  isEmpty: false,
};
