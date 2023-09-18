/**
 * Icons
 * @MehrabSp
 */

import { View, Text } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { FooterAnimation } from "./Animation";

export const FooterIcons = ({ progress, colors }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <FooterAnimation progress={progress} colors={colors}>
        <Feather name="mic-off" size={19} color="black" />
      </FooterAnimation>

      <FooterAnimation progress={progress} colors={colors}>
        <Feather name="camera-off" size={19} color="black" />
      </FooterAnimation>

      <FooterAnimation progress={progress} colors={colors}>
        <Feather name="maximize" size={19} color="black" />
      </FooterAnimation>

      <FooterAnimation progress={progress} colors={colors}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="add-call" size={19} color="#ff1932" />
          <Text style={{ color: "#ff1932" }}> Leave</Text>
        </View>
      </FooterAnimation>

      <FooterAnimation progress={progress} colors={colors}>
        <View style={{ flexDirection: "row" }}>
          <Feather name="zoom-in" size={19} color="black" />
          <Text> 100% </Text>
          <Feather name="zoom-out" size={19} color="black" />
        </View>
      </FooterAnimation>
    </View>
  );
};
