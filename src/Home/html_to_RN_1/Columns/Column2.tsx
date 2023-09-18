import { View, Image, Text } from "react-native";
import { IconAbsolute } from "./IconAbsolute";

export const Col2 = (itemStyle: any, item: any, Columns: boolean) => (
  <View style={{ flex: 1, width: "100%", height: "100%" }}>
    <Image
      style={[
        { width: "100%", height: 230, resizeMode: "cover" },
        itemStyle(Columns, item.id),
      ]}
      source={{ uri: item.uri }}
    />

    <IconAbsolute name={item.name} />
  </View>
);
