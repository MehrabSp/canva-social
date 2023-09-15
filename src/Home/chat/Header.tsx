import { View, Text, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
  
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 25,
          marginHorizontal: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "#3d42df",
            paddingVertical: 7,
            paddingHorizontal: 15,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="video-wireless-outline"
            size={20}
            color="white"
          />
          <Text
            style={{
              marginLeft: 10,
              color: "white",
              fontSize: 15,
              fontWeight: "300",
            }}
          >
            Live Chat
          </Text>
        </View>
  
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="closecircleo" size={20} color="black" />
        </Pressable>
      </View>
    );
  };

export {Header}