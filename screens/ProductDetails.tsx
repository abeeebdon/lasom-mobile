import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import { AppContext } from '../hooks/AppContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ProductDetails = ({ navigation }) => {
  const route = useRoute()
  const { item }: any = route.params
  const { products } = useContext(AppContext)
  const SingleProduct = products.find((product) => product.id === item)
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate('products')}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 10,
        }}
      >
        <MaterialCommunityIcons name="arrow-left" />
        <Text>Go Back</Text>
      </Pressable>
      <Text>{SingleProduct.name}</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})
