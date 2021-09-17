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

                <Image source={{ uri: img }} style={styles.img} />

            <View style={styles.textArea}>
                <Text style={styles.title}>{name}</Text>
                <Text>£{price}</Text>
            </View>
        </View>
    )
}

export default ProductCard


const styles = StyleSheet.create({
  container: {
       height: 160,
      flexDirection:"row"
  },
  content: {
      flex: 1,
    },
    img: {
        height: 160,
        width: "100%",
        resizeMode:"contain"
    },
    imgBox: {
        width:150,
        justifyContent: "center",
       // backgroundColor:"red"
    },
    textArea: {
        flex: 1,
        marginHorizontal:10
    },
  title: {
    fontSize: 16,
     fontWeight: '700',
   // marginHorizontal:10,
  },

});

