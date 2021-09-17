import React, { useState , useEffect, useReducer} from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";
import { fetchAll } from "../serviceApi/ProductService";
import ProductCard from "./../components/ProductCard";
import { Product } from "./../models/Product";

export default function ExploreScreen() {
  const [ products, setProducts ] = useState([]);
  const [shoppingCarts, dispatch]=useReducer([])
  useEffect(() =>
  {

  fetchAll().then((data) =>
  {
    let productList: Product[] =[];
    productList.push(data);
    setProducts(productList);
   })
  return () => {

  }
  }, [])


  function renderItem({ item }) {
    return (
      <ProductCard
        name={item.name}
        colour={item.colour}
        price={item.price}
        id={item.id}
        img={item.img}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={renderItem}
          ItemSeparatorComponent={() => (
            <View style={styles.separator}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal:8
  },
  separator: {
    marginVertical: 1,
    height: 1,
    width: "80%",
  },
});
