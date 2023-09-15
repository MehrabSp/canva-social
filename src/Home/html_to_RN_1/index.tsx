import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { LinearGradient } from "expo-linear-gradient";
// import * as Animatable from 'react-native-animatable';
import { data } from "./data";
import { Col2 } from "./Column2";
import { Col3 } from "./Column3";
import { itemStyle } from "./style";
import {Header} from "./Header";

function RN1({ navigation }: any) {
  // console.log(props.navigation.navigate(), 'p')
  const { height, width } = useWindowDimensions();

  const Columns: boolean = width > height;

  return (
    <View style={{ flex: 1, backgroundColor: "#eaebf5" }}>
      <SafeAreaView>
        <ScrollView>
          <Header navigation={navigation} />

          {/* Section  */}
          {Columns ? (
            <FlatList
              data={data}
              renderItem={({item}) => Col3(itemStyle, item, Columns)}
              key={"_"}
              scrollEnabled={false}
              keyExtractor={(item) => "_" + item.id}
              // keyExtractor={keyExtractor}
              contentContainerStyle={{
                marginHorizontal: 20,
                marginVertical: 20,
              }}
              numColumns={3}
            />
          ) : (
            <FlatList
              data={data}
              renderItem={({item}) => Col2(itemStyle, item, Columns)}
              key={"#"}
              scrollEnabled={false}
              keyExtractor={(item) => "#" + item.id}
              // keyExtractor={keyExtractor}
              contentContainerStyle={{
                marginHorizontal: 20,
                marginVertical: 20,
              }}
              numColumns={2}
            />
          )}

          {/* Footer  */}
          <View
            style={{
              height: 100,
              width: "100%",
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export { RN1 };
