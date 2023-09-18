/**
 * My chat repeat
 * @MEhrabSp
 * bitchs
 */
import { View, Text } from "react-native";
import { replaceStringWithJSX } from "../cc/replaceID";

export const CRMe = ({ item, fixPos }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "flex-end",
      // marginTop: 2,
    }}
  >
    <View style={{ marginRight: 53 }}>
      <View
        style={{
          backgroundColor: "#3d42df",
          padding: 15,
          borderRadius: 20,
          borderTopEndRadius: 1,
          marginTop: 5,
        }}
      >
        <Text key={"Normal-" + item.text} style={{ color: "white" }}>
          {replaceStringWithJSX(
            item.text,
            fixPos.current.Ids,
            <Text key={"@" + item.text} style={{ color: "orange" }}>
              {fixPos.current.Ids}
            </Text>
          )}
        </Text>
      </View>
    </View>
  </View>
);
