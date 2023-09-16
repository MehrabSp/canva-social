/**
 * Repeated chats
 * @MehrabSp
 */
import { View, Text } from "react-native";
import { replaceStringWithJSX } from "./replaceID";

export const CRMe = ({ item }) => {
  return (
    <View style={{ marginLeft: 53 }}>
      <View
        style={{
          backgroundColor: "#f3f4f9",
          padding: 15,
          borderRadius: 20,
          borderTopStartRadius: 1,
          marginTop: 8,
        }}
      >
        <Text key={"Normal-" + item.text}>
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
  );
};
