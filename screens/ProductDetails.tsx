import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { AppContext } from '../hooks/AppContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Product } from '../types/global'

const ProductDetails = ({ navigation }: any) => {
  const [filteredP, setFilteredP] = useState<Product[]>([])
  const [value, setValue] = useState<number>(1)
  const { products }: { products: Product[] } = useContext(AppContext)
  const [SingleProduct, setSingleProduct] = useState<Product>({})
  const route = useRoute()

  const sizes = ['S', 'M', 'L']
  const buttons = ['Description', 'Customer Review', 'Warranty']

  const { item }: any = route.params
  useEffect(() => {
    const ingleProduct = products.find((product) => product.id === item)

    if (ingleProduct) {
      setSingleProduct(ingleProduct)
    }
    const inc = products.filter((pr) => pr.id !== item)
    const filter = inc.filter((_, index) => index < 4)
    setFilteredP(filter)
  }, [])

  const handleChangeImage = (item: string) => {
    const ingleProduct = products.find((product) => product.id === item)

    if (ingleProduct) {
      setSingleProduct(ingleProduct)
    }
  }
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

      {/* Showing images  */}
      <View
        style={{
          width: '100%',
          padding: 10,
          aspectRatio: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 10,
        }}
      >
        <Image
          source={{
            uri: SingleProduct
              ? SingleProduct.profileImageUrl
              : 'https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/d/w/g/na-kundan-earrings-grey-nidzzalifestyle-original-imagjevxrhupdzzj.jpeg?q=90&crop=false',
          }}
          resizeMode="cover"
          style={{ width: '80%', height: '100%', borderRadius: 10 }}
        />
        <FlatList
          data={filteredP}
          contentContainerStyle={{ gap: 30 }}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleChangeImage(item.id)}>
              <Image
                source={{
                  uri: item
                    ? item.profileImageUrl
                    : 'https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/d/w/g/na-kundan-earrings-grey-nidzzalifestyle-original-imagjevxrhupdzzj.jpeg?q=90&crop=false',
                }}
                resizeMode="cover"
                style={{ width: 80, aspectRatio: 1 }}
              />
            </Pressable>
          )}
        />
      </View>
      {/* Showing images end here  */}

      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 22,
          }}
        >
          {SingleProduct?.name}
        </Text>
        {/* Buttons and results */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => {
              setValue((prev) => (prev > 1 ? prev - 1 : prev))
            }}
            style={{
              borderWidth: 0,
              borderRadius: 100,
              backgroundColor: '#D19A64',
              width: 30,
              aspectRatio: 1,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <MaterialCommunityIcons name="minus" color="white" size={20} />
          </Pressable>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {value}
          </Text>
          <Pressable
            onPress={() => {
              setValue((prev) => (prev < 9 ? prev + 1 : prev))
            }}
            style={{
              borderWidth: 0,
              borderRadius: 100,
              backgroundColor: '#D19A64',
              width: 30,
              aspectRatio: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MaterialCommunityIcons name="plus" color="white" size={20} />
          </Pressable>
        </View>

        {/* Price of good */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 22,
          }}
        >
          ₦{SingleProduct?.price}.00
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: 16,
              lineHeight: 23,
            }}
          >
            Category:
          </Text>
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: 16,
              color: '#D19A64',

              lineHeight: 23,
            }}
          >
            {SingleProduct?.category}
          </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          gap: 30,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 22,
          }}
        >
          Size
        </Text>
        <FlatList
          keyExtractor={(item) => item.toString()}
          numColumns={3}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
          data={sizes}
          renderItem={({ item }) => (
            <Text style={{ padding: 10, borderWidth: 1 }}>{item}</Text>
          )}
        />
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          keyExtractor={(item) => item.toString()}
          numColumns={3}
          contentContainerStyle={{
            gap: 10,
            // padding: 10,
          }}
          columnWrapperStyle={{ gap: 10 }}
          data={buttons}
          renderItem={({ item }) => (
            <Text style={{ padding: 10, flex: 1 }}>{item}</Text>
          )}
        />
        <Text>
          Our Rose gold Ring with Diamond cut stone is one of the best selling
          product at Lasom. It’s unique stone crafting makes it exceptionally
          beautiful which has won the heart of many of our customers.{' '}
        </Text>
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})
