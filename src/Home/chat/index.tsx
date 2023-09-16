import {
  useWindowDimensions,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { useState, useRef, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { Feather } from "@expo/vector-icons";
import { chat_data } from "./data";
import { Render } from "./Render";

export const Chat = () => {
  const [me, setMe] = useState("Tim Russel");
  const fixPos = useRef({
    lastName: null,
    Ids: null,
  });
  const { height, width } = useWindowDimensions();

  function handleChangheMe(name: string) {
    if (name != me)
      setMe(name)
  }

  const Columns: boolean = width > height;
  let styleScrollView = {};
  let styleHeader = {};
  if (Columns) {
    // چرخش فعال یا تبلت
    styleScrollView = {
      minHeight: 100,
      maxHeight: 200,
      marginTop: 10,
    };
    styleHeader = {
      marginTop: 5,
    };
  } else {
    // حالت عادی موبایل
    styleScrollView = {
      minHeight: 370,
      maxHeight: 370,
      marginTop: 25,
    };
    styleHeader = {
      marginTop: 25,
    };
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView>
        <ScrollView scrollEnabled={false}>
          <Header styleHeader={styleHeader} />
          <ScrollView
            style={[
              {
                flex: 1,
                // backgroundColor: "whitesmoke",
                borderTopWidth: 1,
                borderColor: "#f5f5f5",
                marginHorizontal: 10,
                paddingHorizontal: 18,
                // paddingVertical: 30,
              },
              styleScrollView,
            ]}
            indicatorStyle="black"
            // scrollEnabled={false}
          >
            <FlatList
              data={chat_data}
              renderItem={({ item }) =>
                Render({ item, me, fixPos, handleChangheMe })
              }
              key={"$"}
              scrollEnabled={false}
              keyExtractor={(_, index) => "$" + index}
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
