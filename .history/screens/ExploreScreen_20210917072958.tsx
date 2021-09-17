import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function ExploreScreen()
{
  const [ products, setProducts ] = useState([])
  function renderItem({item})
  {
    return (
      <View/>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          keyExtractor ={(item)=>item.id.toString()}
          data={products}
          renderItem={renderItem}
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
    flex:1,
    padding:20
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
