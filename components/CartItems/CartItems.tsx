import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CartItem } from '../CartItem/CartItem';
import { EMPTY_CART } from './data';

export type CartProps<T> = {
  items: Array<T>;
  loading: boolean;
  isEmpty: boolean;
};

export type CartItemType = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  imageURI: string;
  code: string;
  controlsColor?: 'green' | 'blue'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  indicatorText: {
    marginTop: 20,
    color: '#999',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const CartItems = ({ items = [], loading, isEmpty }: CartProps<CartItemType>) => {
  if (loading) {
    return <View style={styles.centerContainer}>
      <ActivityIndicator size="large" color="green" />
      <Text style={styles.indicatorText}>Loading</Text>
    </View>
  }
  if (isEmpty) {
    return <View style={styles.centerContainer}>
      <Image source={{ uri: EMPTY_CART }} style={styles.image} />
      <Text style={styles.indicatorText}>The cart is empty</Text>
    </View>
  }
  return (
    <View style={styles.container}>
      {items.map(item => {
        return (
          <CartItem key={item.id} {...item} />
        )
      })}
    </View >
  )
};
