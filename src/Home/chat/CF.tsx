/**
 * Chat file
 * @MehrabSp
 */

import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DiamondSvg } from "./DiamondSvg";

export const CF = ({ item }) => {
  return (
    <View style={{ marginLeft: 53, flexDirection: 'row' }}>
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop: 15,
          borderWidth: 1,
          borderColor: "#f3f4f9",
          flexDirection: "row",
          // width: '80%'
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(255, 236, 179)",
            padding: 8,
            borderRadius: 5,
            width: 35,
            height: 35,
          }}
        >
          <DiamondSvg />
        </View>
        <View style={{marginLeft: 8}}>
          <Text style={{color: '#2c303a'}}>{item.file.name}</Text>
          <Text style={{color: '#b8b8b8'}}>{item.file.size}</Text>
        </View>
        <View style={{ margin: 8 }}>
          <Feather name="download" size={24} color="#b8b8b8" />
        </View>
      </View>
    </View>
  );
};
