import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CartItem } from './CartItem';

export default {
  title: 'components/CartItem',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

export const Basic: ComponentStory<typeof CartItem> = args => (
  <CartItem {...args} />
);

Basic.args = {
  name: 'Vans Slip-On',
  price: '100,20',
  quantity: 2,
  imageURI: 'https://images.vans.com/is/image/VansEU/VN000EYEBKA-HERO?$PDP-FULL-IMAGE$',
  code: 'D-12345',
  id: 'dsf754s6fs45df65s',
  controlsColor: 'green',
};
