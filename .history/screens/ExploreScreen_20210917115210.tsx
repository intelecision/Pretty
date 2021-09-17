import React, { useState, useEffect, useReducer } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";
import { fetchAll } from "../serviceApi/ProductService";
import ProductCard from "./../components/ProductCard";
import { Product, ShoppingCart } from "./../models/Product";
import reducer from "./../reducers/reducer";
import { ACTION_TYPE } from "./../reducers/ActionsTypes";

export default function ExploreScreen() {
  const [products, setProducts] = useState([]);

  const [shoppingCarts, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    fetchAll().then((data) => {
     // let productList: Product[] = [];
    //  productList.push(data);
      setProducts(data);
    });
    return () => {};
  }, []);
  const handleAdd = (product: Product) =>
  {

  // find if product already
    const idx = shoppingCarts.findIndex((p) => p.id === product.id);
    let cart: ShoppingCart = new ShoppingCart();
    if (idx === -1)
    {
      // add the item to to the shopping cart

      cart.quantity + 1;
      cart.totalPrice = cart.totalPrice + product.price;
      cart.product = product;
       dispatch({type:ACTION_TYPE.ADD_TO_CART, payload:{...cart}})
    }
    else{
      // product already in cart so update qty
       cart.quantity + 1;
      cart.totalPrice = cart.totalPrice + product.price;
      cart.product = product;
       dispatch({type:ACTION_TYPE.ADD_TO_CART, payload:{...cart}})
    }

}
  function renderItem({ item }) {

    return (
      <ProductCard
        name={item.name}
        colour={item.colour}
        price={item.price}
        id={item.id}
        img={item.img}
        onAdd={() =>
        {

          dispatch({type:ACTION_TYPE.ADD_TO_CART, payload:{quantity: +1,...item}})
        }}
          onRemove={() =>
        {
          dispatch({type:ACTION_TYPE.ADD_TO_CART, payload:{...item}})
        }}
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
          ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    marginHorizontal: 8,
  },
  separator: {
    marginVertical: 1,
    height: 1,
    width: "80%",
  },
});
