import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyButton } from '../components/Button/Button'
import { CartItems } from '../components/CartItems/CartItems'
import { DUMMY_ITEMS } from '../components/CartItems/data'
import { CartItemType } from '../components/CartItems/CartItems'

export type ICart = {
  items: Array<CartItemType>;
  loading: boolean;
  isEmpty: boolean;
}

const Cart = ({ items = DUMMY_ITEMS, loading = false, isEmpty = !items.length }: ICart) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <CartItems items={DUMMY_ITEMS} loading={loading} isEmpty={isEmpty} />
      </ScrollView>
      <MyButton onPress={() => { console.log('Order now pressed') }} text={'Order now'} disabled={loading || isEmpty} />
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  container: {
    // flex: 1,
    paddingHorizontal: 16,
  },
})