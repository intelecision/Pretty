import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CartButton } from "./CartButton";

interface Props {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}

const ProductCard = (props: Props) => {
  const { id, colour, name, price, img } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.textArea}>
        <View style={{ flex: 3 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={{marginTop:10}}>{colour}</Text>
          <Text>£{price}</Text>
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <CartButton quantity={0} onAdd={null} onRemove={null} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection: "row",
  },
  content: {
    flex: 1,
  },
  img: {
    height: 160,
    width: "100%",
    resizeMode: "contain",
  },
  imgBox: {
    width: 120,
    justifyContent: "center",
    // backgroundColor:"red"
  },
  textArea: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    // marginHorizontal:10,
  },
});
