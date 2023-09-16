/**
 * Repeated chats
 * @MehrabSp
 */
import { View, Text } from "react-native";
import { replaceStringWithJSX } from "./replaceID";

export const CR = ({ item, fixPos }) => {
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
            fixPos.current.Ids,
            <Text key={"@" + item.text} style={{ color: "blue" }}>
              {fixPos.current.Ids}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
};
