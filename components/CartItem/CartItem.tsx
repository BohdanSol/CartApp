import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CartItemType } from '../CartItems/CartItems';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    backgroundColor: '#e1e1e1',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    flexDirection: 'row',
  },
  itemImage: {
    width: 68,
    height: 68,
    borderRadius: 4,
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemNameText: {
    color: '#222',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemCodeText: {
    color: '#999',
    fontSize: 12,
  },
  priceContainer: {
    borderWidth: 2,
    borderColor: 'red',
    marginRight: 'auto',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 100,

  },
  itemPriceText: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  controllsContainer: {
    width: 86,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  lessIndicator: {
    width: 21,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
  },
  controllText: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
  },
  minusImage: {
    width: 14,
    height: 14,
  },
  plusImage: {
    width: 10,
    height: 10,
  },
});

export const CartItem = ({ name, price, quantity, imageURI, code, controlsColor = 'green' }: CartItemType) => {
  const [amount, setAmount] = useState(quantity);

  const increase = () => {
    setAmount(amount + 1);
  }

  const decrease = () => {
    setAmount(amount - 1 > 0 ? amount - 1 : 0);
  }

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: imageURI }} style={styles.itemImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemNameText} numberOfLines={1}>{name}</Text>
        <Text style={styles.itemCodeText}>CODE: {code}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPriceText}>$ {price}</Text>
        </View>
      </View>
      <View style={styles.controllsContainer}>
        <TouchableOpacity onPress={decrease} activeOpacity={0.6} style={[styles.lessIndicator, { borderColor: controlsColor }]}>
          <Image
            style={styles.minusImage}
            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-minus-512.png' }}
          />
        </TouchableOpacity>
        <Text style={[styles.controllText, { color: controlsColor }]}>{amount}</Text>
        <TouchableOpacity onPress={increase} activeOpacity={0.6} style={[styles.lessIndicator, { borderColor: controlsColor }]}>
          <Image
            style={styles.plusImage}
            source={{ uri: 'https://snipstock.com/assets/cdn/png/e0f99615e001a134674ac68167fdedc9.png' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
};
