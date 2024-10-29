import { View, Text, StatusBar, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import img1 from '../assets/user.jpeg'

const ProductHead = ({ route }: any) => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false)

  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight || 20,
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      <Text style={{ textTransform: 'capitalize', fontSize: 28 }}>
        {route.name}
      </Text>
      <Pressable
        style={{
          height: 50,

          display: 'flex',
          justifyContent: 'center',
        }}
        onPress={() => setShowSideNav(!showSideNav)}
      >
        <Image
          source={img1}
          alt="img"
          style={{ flex: 1, width: 50, borderRadius: 50 }}
        />
      </Pressable>
      {showSideNav && <Text>ShowSideNav</Text>}
    </View>
  )
}

export default ProductHead
