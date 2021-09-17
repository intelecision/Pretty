import React, { useState , useEffect} from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { fetchAll } from "../serviceApi/ProductService";
import ProductCard from "./../components/ProductCard";

export default function ExploreScreen() {
  const [ products, setProducts ] = useState([]);
  useEffect(() =>
  {

  fetchAll().then((data) =>
  {
    console.log(data);
    setProducts(data)
   })
  return () => {

  }
  }, [])
// async function  test()
//  {
//     const res = await axios.get<Data>(
//      "https://blog-server.gagandeogan.repl.co"
//    );
//    return res.data;
//  }

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
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 2,
    height: 1,
    width: "80%",
  },
});
