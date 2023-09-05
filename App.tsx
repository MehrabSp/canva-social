// MRB
import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

function HomeScreen({ navigation }: any) {
  // console.log(props.navigation.navigate(), 'p')

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <LinearGradient
          // Button Linear Gradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={{ height: 100, width: 100 }}
        >
          <Text>Sign in with Facebook</Text>
          <Text>Home Screen</Text>
        </LinearGradient>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </SafeAreaView>
    </View>
  );
}

function DetailsScreen() {
  const DATA = [
    {
      id: "bd7acbea",
      title: "First Item",
      image:
        "https://www.transparentpng.com/thumb/anime-boy/GzVoMV-anime-boy-cut-out-png.png",
    },
    {
      id: "3ac68afc",
      image:
        "https://www.transparentpng.com/thumb/anime-boy/fRZVsA-anime-boy-clipart-hd.png",
      title: "Second Item",
    },
    {
      id: "58888694a0f",
      image:
        "https://www.transparentpng.com/thumb/anime-boy/KRE3FV-anime-boy-png-picture.png",
      title: "Third Item",
    },
    {
      id: "57778694a0f",
      image:
        "https://p7.hiclipart.com/preview/218/63/782/uchiha-clan-naruto-anime-manga-naruto.jpg",
      title: "Four Item",
    },
    {
      id: "58666694a0f",
      image:
        "https://p7.hiclipart.com/preview/218/63/782/uchiha-clan-naruto-anime-manga-naruto.jpg",
      title: "Five Item",
    },
  ];

  type ItemProps = { title: string; image: string };

  const Item = ({ title, image }: ItemProps) => (
    <View style={styles.container}>
      <LinearGradient
        style={{
          height: 250,
          width: "90%",
          backgroundColor: "pink",
          borderRadius: 20,
          marginHorizontal: "5%",
        }}
        colors={["#3f32fa", "#6551fc", "#ff5efc"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.1, y: -0.2 }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            resizeMode: 'contain',
          }}
        />

        <View style={{ justifyContent: "flex-end", flex: 1, margin: 20 }}>
          <Text style={[styles.title, { fontSize: 20 }]}>#{title}</Text>
          <Text style={[styles.title, { fontWeight: "bold", fontSize: 13 }]}>
            depress
          </Text>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        data={DATA}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          <Item title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <StatusBar style="dark" /> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ title: "depress", headerShown: false }}
          >
            {(props) => <HomeScreen {...props} extraData={["s"]} />}
          </Stack.Screen>
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: "Social",
              headerTitleAlign: "center",
              statusBarAnimation: "fade",
              animation: "slide_from_right",
              headerTintColor: "white",
              navigationBarColor: "black",
              statusBarColor: "black",
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
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
  title: {
    color: "white",
  },
});
