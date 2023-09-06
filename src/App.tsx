import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable';

function HomeScreen({ navigation }: any) {
    // console.log(props.navigation.navigate(), 'p')
  
    return (
      <View className="flex-1 bg-indigo-500">
        <SafeAreaView>
        <Animatable.Text animation="zoomIn">Zoom me up, Scotty</Animatable.Text>
          <LinearGradient
            // Button Linear Gradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{ height: 100, width: 100 }}
          >
            <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
            <Text>Sign in with Facebook</Text>
            <Text>Home Screen</Text>
          </LinearGradient>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Social")}
          />
          <Button
            title="Go to Images"
            onPress={() => navigation.navigate("Images")}
          />
        </SafeAreaView>
      </View>
    );
  }

export default HomeScreen