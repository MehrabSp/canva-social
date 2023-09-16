/**
 * My chat
 * @MehrabSp
 */
import { View, Text, Image } from "react-native";
import { replaceStringWithJSX } from "./replaceID";

export const CMe = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 40,
      }}
    >
      <View style={{ marginRight: 13 }}>
        <Text style={{ color: "blue", alignSelf: "flex-end" }}>
          {item.name}
        </Text>
        <View
          style={{
            backgroundColor: "#3d42df",
            padding: 15,
            borderRadius: 20,
            borderTopEndRadius: 1,
            marginTop: 10,
          }}
        >
          <Text key={"Normal-" + item.text} style={{ color: "white" }}>
            {replaceStringWithJSX(
              item.text,
              "@",
              <Text key={"@" + item.text} style={{ color: "blue" }}>
                {"@"}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <Image
        source={{ uri: item.profile_image }}
        style={{ height: 40, width: 40, borderRadius: 10 }}
      />
    </View>
  );
};
