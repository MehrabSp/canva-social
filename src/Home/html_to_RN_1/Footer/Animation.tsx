import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";

export const FooterAnimation = ({ children, progress, colors }) => {
  const iconColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.backgroundIcon, colors.dark.backgroundIcon]
    );

    return { backgroundColor };
  });

  return (
    <Animated.View style={[styles.shadow, styles.icon, iconColor]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 4,
    borderRadius: 8,
    padding: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 3,
  },
});
