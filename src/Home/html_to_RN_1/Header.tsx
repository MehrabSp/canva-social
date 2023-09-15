import { View, Pressable } from 'react-native'
import { Feather, Ionicons } from "@expo/vector-icons";

const Header = ({ navigation }: any) => {
  return (
    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginTop: 10,
    }}
  >
    <Pressable
      style={{
        backgroundColor: "white",
        width: 43,
        height: 43,
        borderRadius: 9999,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather name="sun" size={28} color="orange" />
    </Pressable>
    <Pressable
      style={{
        backgroundColor: "white",
        width: 43,
        height: 43,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => navigation.navigate("Chat")}
    >
      <Ionicons
        name="md-chatbubble-ellipses-outline"
        size={28}
        color="black"
      />
    </Pressable>
  </View>
  )
}

export {Header}