import {
  View,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "./data";
import { Col2 } from "./Column2";
import { Col3 } from "./Column3";
import { itemStyle } from "./style";
import { Header } from "./Header";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

type Theme = "light" | "dark";

function RN1({ navigation }: any) {
  const { height, width } = useWindowDimensions();
  const [theme, setTheme] = useState<Theme>("light");
  const colors = useRef({
    dark: {
      background: "#3c3f56",
      // circle: '#252525',
      // text: '#F8F8F8',
    },
    light: {
      background: "#eaebf5",
      // circle: '#FFF',
      // text: '#1E1E1E',
    },
  });

  function changheTheme(theme: Theme) {
    setTheme(theme);
    console.log('changhe ', theme)
  }


  // const progress = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1) : withTiming(0);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.current.light.background, colors.current.dark.background]
    );

    return { backgroundColor };
  });

  // const rCircleStyle = useAnimatedStyle(() => {
  //   const backgroundColor = interpolateColor(
  //     progress.value,
  //     [0, 1],
  //     [colors.light.circle, colors.dark.circle]
  //   );

  //   return { backgroundColor };
  // });

  // const rTextStyle = useAnimatedStyle(() => {
  //   const color = interpolateColor(
  //     progress.value,
  //     [0, 1],
  //     [colors.light.text, colors.dark.text]
  //   );

  //   return { color };
  // });

  const Columns: boolean = width > height;

  return (
    <Animated.View style={[{ flex: 1 }, rStyle]}>
      {/* //     <Animated.View style={[styles.container, rStyle]}>

//       <Animated.Text style={[styles.text, rTextStyle]}>Theme</Animated.Text>
//       <Animated.View style={[styles.circle, rCircleStyle]}>
//         <Switch
//           value={theme === 'dark'}
//           onValueChange={(toggled) => {
//             setTheme(toggled ? 'dark' : 'light');
//           }}
//           trackColor={SWITCH_TRACK_COLOR}
//           thumbColor={'violet'}
//         />
//       </Animated.View>
//     </Animated.View> */}

      <SafeAreaView>
        <ScrollView>
          <Header navigation={navigation} changheTheme={changheTheme} />

          {/* Section  */}
          {Columns ? (
            <FlatList
              data={data}
              renderItem={({ item }) => Col3(itemStyle, item, Columns)}
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
              renderItem={({ item }) => Col2(itemStyle, item, Columns)}
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
    </Animated.View>
  );
}

export { RN1 };
