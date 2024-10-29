import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { app } from '../config'

// Define the Products interface
interface Product {
  id: string | number
  name: string
  category: string
  price: string
  quantity: string
  profileImageUrl: string
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  const db = getFirestore(app)

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'))
    const productArray: Product[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, 'id'>), // Type assertion for the data structure
    }))
    setProducts(productArray)
  }

  useEffect(() => {
    getData()
  }, [])

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
          <View
            style={{
              flex: 1,
              shadowOffset: { width: 50, height: 50 },
              elevation: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              height: 300,
            }}
          >
            <Image
              source={{
                uri: item.profileImageUrl
                  ? item.profileImageUrl
                  : 'https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/d/w/g/na-kundan-earrings-grey-nidzzalifestyle-original-imagjevxrhupdzzj.jpeg?q=90&crop=false',
              }}
              resizeMode="cover"
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                left: 0,
                right: 0,
                marginHorizontal: 'auto',
              }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  width: '90%',
                  borderRadius: 10,
                  display: 'flex',
                  gap: 10,
                }}
              >
                <View>
                  <Text>{item.name}</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text>{item.price}</Text>
                  <Pressable
                    style={{
                      backgroundColor: 'red',
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    <Text>Add to cart</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Products
