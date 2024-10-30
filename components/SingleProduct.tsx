import { View, Text, Image, Pressable, Alert } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../hooks/AppContext'
const SingleProduct = ({ item, navigation }: any) => {
  // const navigation = useNavigation()
  const { cart, setCart } = useContext(AppContext)
  const handleItemPress = (item: any) => {
    navigation.navigate('productDetails', { item: item })
  }
  const handleCart = (id: string) => {
    const cartContain = cart.find((car) => car.id === id)
    if (cartContain) {
      return Alert.alert('You have added this product already')
    } else {
      setCart([...cart, item])
    }
    console.log(cart)
  }
  return (
    <Pressable
      onPress={() => handleItemPress(item.id)}
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
              onPress={() => handleCart(item.id)}
            >
              <Text>Add to cart</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default SingleProduct
