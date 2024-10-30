import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import SingleProduct from '../components/SingleProduct'
import { Product } from '../types/global'
import { AppContext } from '../hooks/AppContext'

// Define the Products interface

const Products = ({ navigation }: any) => {
  const { products } = useContext(AppContext)

  return (
    <View>
      <View style={{ backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white' }}>
          Choose from our varieties of products
        </Text>
      </View>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 10, padding: 10, paddingBottom: 25 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <SingleProduct item={item} navigation={navigation} />
        )}
      />
    </View>
  )
}

export default Products
