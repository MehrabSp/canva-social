import { View, ScrollView, Text } from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { FooterIcons } from "./Footer";
import { colors } from "../../util/cc";
import { SectionList } from "./Section";

type Theme = "light" | "dark";

export function RN1({ navigation }: any) {
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

  return (
    <Animated.View style={[{ flex: 1 }, rStyle]}>
      <SafeAreaView>
        <ScrollView>
          <Header navigation={navigation} changheTheme={changheTheme} />

          <SectionList />

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
