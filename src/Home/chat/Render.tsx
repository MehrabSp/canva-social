import { View, Text, Image } from 'react-native'
import { CMe as RenderMe } from "./CMe";
import { CRMe as Render_2PM } from "./CRMe";

const Render = ({ item, index, me, fixPos }) => {
  // console.log(fixPos.current, 'e')
  //
  if (item.name == me) return <RenderMe item={item} index={index} />;

  const iFixbool: boolean =
    fixPos.current !== null ? item.name == fixPos.current : false;

  fixPos.current = item.name;

  if (iFixbool)
    return (
        <Render_2PM item={item} />
    );

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
          <Text>{item.text}</Text>
        </View>
      </View>
    </View>
  );
};

export {Render}