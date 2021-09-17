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
        <View>
            <Image source={{uri: img}} style={styles.img} />
        </View>
    )
}

export default ProductCard


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    flex:1,
    padding:20
    },
    img: {
        height: 200,
        width:200
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

