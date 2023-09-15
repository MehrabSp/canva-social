import {
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { Feather } from "@expo/vector-icons";
import { chat_data } from "./data";

const RenderMe = ({ item, index }) => {
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
          <Text style={{color: 'white'}}>{item.text}</Text>
        </View>
      </View>
      <Image
        source={{ uri: item.profile_image }}
        style={{ height: 40, width: 40, borderRadius: 10 }}
      />
    </View>
  );
};

const Render_2PM = ({ item }) => {
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
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

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

const Chat = () => {
  const [me, setMe] = useState("Emmy Lou");
  const fixPos = useRef({
    lastName: null,
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <ScrollView
            style={{
              flex: 1,
              // backgroundColor: "whitesmoke",
              maxHeight: 370,
              minHeight: 350,
              borderTopWidth: 1,
              borderColor: "#f5f5f5",
              marginTop: 25,
              marginHorizontal: 10,
              paddingHorizontal: 18,
              // paddingVertical: 30,
            }}
            indicatorStyle="black"
          >
            <FlatList
              data={chat_data}
              renderItem={({ item, index }) =>
                Render({ item, index, me, fixPos })
              }
              key={"$"}
              scrollEnabled={false}
              keyExtractor={(_, index) => "$" + index}
              // keyExtractor={keyExtractor}
              contentContainerStyle={
                {
                  // marginHorizontal: 20,
                  // marginVertical: 20,
                }
              }
            />
          </ScrollView>

          <View style={{ marginHorizontal: 30, marginTop: 20 }}>
            <TextInput
              scrollEnabled={false}
              selectTextOnFocus
              spellCheck
              style={{
                color: "#2c303a",
                backgroundColor: "#f3f4f9",
                lineHeight: 20,
                paddingVertical: 15,
                paddingHorizontal: 15,
                borderRadius: 14,
              }}
              placeholder="Type your meesage..."
            />
            <View
              style={{
                position: "absolute",
                right: 0,
                padding: 10,
                // width: 38, height: 38,
                backgroundColor: "#3d42df",
                borderRadius: 8,
                marginRight: 10,
                marginVertical: 8,
              }}
            >
              <Feather name="send" size={20} color="white" />
            </View>
          </View>

          {/* Footer  */}
          <View
            style={{
              height: 100,
              width: "100%",
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Chat };
