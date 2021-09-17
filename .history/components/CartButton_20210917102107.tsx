import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"


interface Props {
    quantity: number,
    onRemove(): void,
    onAdd():void
}

export const CartButton = (props: Props) =>
{
    const { quantity, onRemove, onAdd } = props;
    return (
        <View
        style={{
                flexDirection: "row",
            justifyContent:"flex-end",
                alignItems:"center",
                paddingLeft: 10,

        }}
      >
        <TouchableOpacity
          style={styles.UpDownButtonStyle}
          activeOpacity={0.5}
          onPress={onRemove}
        >
          <View style={styles.StepperGroupStyle}>
            <Ionicons
              name="ios-remove"
              size={30}
              margin="10"
              style={{ alignSelf: "center" }}
            />
          </View>
        </TouchableOpacity>

        <View style={{ justifyContent: "center" }}>
          <Text style={{ width: 20, textAlign: "center" }}>{quantity}</Text>
        </View>

        <TouchableOpacity
          style={styles.UpDownButtonStyle}
          onPress={onAdd}
          activeOpacity={0.5}
        >
          <View style={styles.StepperGroupStyle}>
            <Ionicons
              name="ios-add"
              size={30}
              margin="5"
              style={{ alignSelf: "center" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 10,
  },
  StepperGroupStyle: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  NumberRowStyle: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: 40,
    //margin: 5
  },
  UpDownButtonStyle: {
    backgroundColor: "#f2e4e1",
    borderWidth: 0.5,
    borderColor: "#eb4a2a",
    height: 35,
    width: 35,
    margin: 5,
  },
  AddStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    borderWidth: 0.5,
    borderColor: "#dddddd",
    height: 35,
    width: 80,
    marginRight: 10,
    paddingLeft: 10,
  },

  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
});
