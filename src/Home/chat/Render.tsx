import { View, Text, Image } from "react-native";
import { CMe as RenderMe } from "./CMe";
import { CRMe as Render_2PM } from "./CR";
import { CF as Render_File } from "./CF";
import { replaceStringWithJSX } from "./replaceID";

export const Render = ({ item, me, fixPos }) => {
  // const regex = /@\w+/g;
  // const newText = item.text.replace(regex, (match) => {
  //   console.log(match , 'match')
  //   // return <Text style={{color: 'blue'}}>${match}</Text>;
  // });

  // newText
  //   var text = "This is a sample text with an Instagram handle @MehrabSp in it.";
  // var pattern = /@([A-Za-z0-9._]+)/g;

  // console.log(result); // ["@MehrabSp"]

  // console.log(
  //   replaceStringWithJSX(
  //     item.text,
  //     "Hi",
  //     <Text style={{ color: "yellow" }}>{"Hi"}</Text>
  //   )
  // );

  if (item.type == "File") return <Render_File item={item} />;
  if (item.name == me) return <RenderMe item={item} />;

  const iFixbool: boolean =
    fixPos.current !== null ? item.name == fixPos.current : false;

  fixPos.current = item.name;

  if (iFixbool) return <Render_2PM item={item} />;
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
        <Text>{item.name}</Text>
        <View
          style={{
            backgroundColor: "#f3f4f9",
            padding: 15,
            borderRadius: 20,
            borderTopStartRadius: 1,
            marginTop: 10,
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
    </View>
  );
};
