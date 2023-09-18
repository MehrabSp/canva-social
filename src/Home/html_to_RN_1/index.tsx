import {
  View,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Text,
} from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "./data";
import { Col2 } from "./Columns/Column2";
import { Col3 } from "./Columns/Column3";
import { itemStyle } from "./style";
import { Header } from "./Header";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { FooterIcons } from "./Footer";
import { colors } from "../../util/cc";

type Theme = "light" | "dark";

function RN1({ navigation }: any) {
  const { height, width } = useWindowDimensions();
  const [theme, setTheme] = useState<Theme>("light");
  // const Theme = useRef<Theme>("light")

  function changheTheme(theme: Theme) {
    setTheme(theme);
    // Theme.current = theme;
    // console.log("changhe ", theme);
  }

  const progress = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1) : withTiming(0);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.background, colors.dark.background]
    );

    return { backgroundColor };
  });

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

          {/* Footer Icons  */}
          <FooterIcons progress={progress} colors={colors} />

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
