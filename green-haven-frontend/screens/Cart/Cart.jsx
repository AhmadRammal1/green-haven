import { StyleSheet, Text, View } from 'react-native'
import { CartItem } from "../../components"
import React from 'react'

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
      <CartItem />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})