import { View, Text, Image, Pressable } from "react-native";
import { CMe as RenderMe } from "./CMe";
import { CRMe as RenderMe_2PM } from "./CRMe";
import { CR as Render_2PM } from "./CR";
import { CF as Render_File } from "./CF";
import { replaceStringWithJSX } from "./replaceID";
import { findAndsave } from "./findIds";

export function Render({ item, me, fixPos, handleChangheMe }) {
  findAndsave(item.text, fixPos);

  if (item.type == "File") return <Render_File item={item} />;

  const iFixbool: boolean =
    fixPos.current.lastName !== null
      ? item.name == fixPos.current.lastName
      : false;
  fixPos.current.lastName = item.name;

  if (item.name == me && iFixbool)
    return <RenderMe_2PM item={item} fixPos={fixPos} />;
  if (item.name == me) return <RenderMe item={item} fixPos={fixPos} />;
  if (iFixbool) return <Render_2PM item={item} fixPos={fixPos} />;
  return (
    <View
      style={{
        flexDirection: "row", //this
        marginTop: 40,
      }}
    >
      <Image
        source={{ uri: item.profile_image }}
        style={{ height: 40, width: 40, borderRadius: 10 }}
      />
      <View style={{ marginLeft: 13 }}>
        <Pressable onPress={() => handleChangheMe(item.name)}>
          <Text>{item.name}</Text>
        </Pressable>

        <View
          style={{
            backgroundColor: "#f3f4f9",
            paddingVertical: 15,
            paddingLeft: 15,
            paddingRight: 50,
            borderRadius: 20,
            borderTopStartRadius: 1,
            marginTop: 10,
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
    </View>
  );
}
