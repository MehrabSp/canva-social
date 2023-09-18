import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export function IconAbsolute({ name }) {
  return (
    <>
      <View
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 15, 47, 0.5)",
          paddingVertical: 7,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginBottom: 15,
          marginRight: 15,
          zIndex: 5,
          bottom: 0,
          right: 0,
        }}
      >
        <Text style={{ color: "white", fontSize: 11, fontWeight: "600" }}>
          {name}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          marginTop: 15,
          marginLeft: 15,
          zIndex: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 15, 47, 0.5)",
            padding: 10,
            borderRadius: 7,
            marginRight: 5,
          }}
        >
          <Feather name="mic-off" size={18} color="white" />
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 15, 47, 0.5)",
            padding: 10,
            borderRadius: 7,
          }}
        >
          <Feather name="camera-off" size={18} color="white" />
        </View>
      </View>
    </>
  );
}
