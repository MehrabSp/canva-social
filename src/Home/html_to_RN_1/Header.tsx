import { View, Pressable } from "react-native";
import { useRef } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const Header = ({ navigation, changheTheme }: any) => {
  const toggled = useRef(true);

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
        onPress={() => {
          changheTheme(toggled.current ? "dark" : "light");
          toggled.current = !toggled.current;
        }}
      >
        {toggled.current ? (
          <Animatable.View animation="zoomIn">
            <Feather name="sun" size={28} color="orange" />
          </Animatable.View>
        ) : (
          <Animatable.View animation="fadeInRightBig">
            <Feather name="moon" size={28} color="black" />
          </Animatable.View>
        )}
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
  );
};

export { Header };
