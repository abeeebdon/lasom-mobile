import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../hooks/AppContext'

const Carts = () => {
  const { cart, setCart } = useContext(AppContext)
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 10,
          paddingVertical: 10,
          borderBottomWidth: 1,
        }}
      >
        <Text>Products</Text>
        <Text>Price</Text>
        <Text>Quantity</Text>
      </View>
      <View style={{ width: 300, height: 300 }}>
        {cart.length > 0 ? (
          <FlatList
            data={cart}
            contentContainerStyle={{ gap: 10, padding: 10, paddingBottom: 25 }}
            renderItem={({ item }) => (
              <View style={{}}>
                <Image
                  source={{
                    uri: item.profileImageUrl
                      ? item.profileImageUrl
                      : 'https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/d/w/g/na-kundan-earrings-grey-nidzzalifestyle-original-imagjevxrhupdzzj.jpeg?q=90&crop=false',
                  }}
                  // resizeMode="cover"
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                />
                <Text>{item.name}</Text>
                <Text>{item.name}</Text>
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
                    <MaterialCommunityIcons
                      name="minus"
                      color="white"
                      size={20}
                    />
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
                    <MaterialCommunityIcons
                      name="plus"
                      color="white"
                      size={20}
                    />
                  </Pressable>
                </View>
              </View>
            )}
          />
        ) : (
          <Text>Your cart is empty</Text>
        )}
      </View>
    </View>
  )
}

export default Carts
