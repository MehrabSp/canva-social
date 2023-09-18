import { View, Text, Image } from "react-native";

export function RenderFooter({ item, fixPos }) {
  // console.log(fixPos.current.numFooter, "num footer");
  if (fixPos.current.numFooter > 3) {
    fixPos.current.numFooterPlus = fixPos.current.numFooterPlus + 1;
    return (
      <View
        style={{
          backgroundColor: "#e1e0e1",
          height: 40,
          width: 40,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#636181" }}>
          {fixPos.current.numFooterPlus}+
        </Text>
      </View>
    );
  }
  fixPos.current.numFooter = fixPos.current.numFooter + 1;
  return (
    <View
      style={{
        // flexDirection: "row", //this
        marginRight: 10,
      }}
    >
      <Image
        source={{ uri: item.profile_image }}
        style={{ height: 40, width: 40, borderRadius: 10 }}
      />
    </View>
  );
}
