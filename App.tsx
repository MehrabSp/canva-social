/**
 * @MehrabSp
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Social from "./src/Home/Social/Social";
import Images from "./src/Home/Images/Images";
import HomeScreen from "./src/App";
import { RN1 } from "./src/Home/html_to_RN_1";
import { Chat } from "./src/Home/chat";

const Stack = createNativeStackNavigator();

export default function () {
  return (
    // <View className="flex-1 bg-black">
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor="rgba(255, 255, 255, 0.1)" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ title: "depress", headerShown: false }}
          >
            {(props) => <HomeScreen {...props} extraData={["s"]} />}
          </Stack.Screen>
          <Stack.Screen
            name="Social"
            component={Social}
            options={{
              // title: "Social",
              headerTitleAlign: "center",
              // // statusBarAnimation: "fade",
              animation: "slide_from_right",
              headerTintColor: "white",
              navigationBarColor: "black",
              // // statusBarColor: "black",
              headerStyle: {
                backgroundColor: "#000",
              },
              // headerSearchBarOptions:
              // headerLeft: () => (
              //   // <Button
              //   //   onPress={() => alert('This is a button!')}
              //   //   title="Info"
              //   //   color="#000"
              //   // />
              //   <MaterialIcons name="keyboard-arrow-left" size={35} color="#000" />
              // ),
            }}
          />
          <Stack.Screen
            name="Images"
            component={Images}
            options={{
              // title: "Images",
              // headerTitleAlign: "center",
              // statusBarAnimation: "fade",
              animation: "slide_from_bottom",
              // headerTintColor: "white",
              // navigationBarColor: "black",
              // statusBarColor: "black",
              // headerStyle: {
              //   backgroundColor: "#000",
              // },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RN1"
            component={RN1}
            options={{
              // title: "Images",
              // headerTitleAlign: "center",
              // statusBarAnimation: "fade",
              animation: "flip",
              // headerTintColor: "white",
              // navigationBarColor: "black",
              // statusBarColor: "black",
              // headerStyle: {
              //   backgroundColor: "#000",
              // },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    // </View>
  );
}
