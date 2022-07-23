import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Cart from './Cart';
import { DUMMY_ITEMS } from '../components/CartItems/data';

storiesOf('screens/CartScreen', module)
  .add('Empty', () => <Cart items={[]} loading={false} isEmpty={true} />)
  .add('Loading', () => <Cart items={[]} loading={true} isEmpty={false} />)
  .add('Fulfilled', () => <Cart items={DUMMY_ITEMS} loading={false} isEmpty={false} />);
