import { View, Text } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export const FooterIcons = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 4,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 40,
          elevation: 3,
          padding: 10,
        }}
      >
        <Feather name="mic-off" size={19} color="black" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 4,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 40,
          elevation: 3,
          padding: 10,
        }}
      >
        <Feather name="camera-off" size={19} color="black" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 4,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 40,
          elevation: 3,
          padding: 10,
        }}
      >
        <Feather name="maximize" size={19} color="black" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 4,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 40,
          elevation: 3,
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="add-call" size={19} color="#ff1932" />
          <Text style={{ color: "#ff1932" }}> Leave</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 4,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 40,
          elevation: 3,
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Feather name="zoom-in" size={19} color="black" />
          <Text> 100% </Text>
          <Feather name="zoom-out" size={19} color="black" />
        </View>
      </View>
    </View>
  );
};
