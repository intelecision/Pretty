import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

interface Props {
    id: number,
    colour: string,
    name: string,
    price: number,
    img:string
}

const ProductCard = (props: Props) =>
{
    const { id, colour, name, price, img }= props;
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: img }} style={styles.img} />
            </View>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text>{price}</Text>
            </View>
        </View>
    )
}

export default ProductCard


const styles = StyleSheet.create({
  container: {
        flex: 1,
      flexDirection:"row"
  },
  content: {
      flex: 1,

    },
    img: {
        height: 150,
        width: 100,
        resizeMode:"contain"
  },
  title: {
    fontSize: 16,
      fontWeight: '700',
    marginHorizontal:10,
  },

});

