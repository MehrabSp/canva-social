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
  //   var text = "This is a sample text with an Instagram handle @MehrabSp in it.";
  // var pattern = /@([A-Za-z0-9._]+)/g;
  // var pattern = /@([A-Za-z0-9_]+)/g;
  const regex = /@(\w+)/g;
  try {
    if (item.text.includes("@")) {
      const matches = item.text.match(regex);
      console.log(matches[0] ,'mm'); // null
      fixPos.current.Ids = matches[0]
    } else {
      console.log("No usernames found.");
    }
  } catch (error) {
    console.log("err " + error);
  }

  if (item.type == "File") return <Render_File item={item} />;
  if (item.name == me) return <RenderMe item={item} />;

  const iFixbool: boolean =
    fixPos.current.lastName !== null
      ? item.name == fixPos.current.lastName
      : false;

  fixPos.current.lastName = item.name;

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
};
