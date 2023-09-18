import {
  useWindowDimensions,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { Feather } from "@expo/vector-icons";
import { chat_data } from "./data";
import { Render } from "./Render";
import { RenderFooter } from "./RenderFooter";

export function Chat() {
  const [me, setMe] = useState("Tim Russel"); //Re-render all
  const fixPos = useRef({
    lastName: null,
    Ids: null,
    numFooter: 0,
    numFooterPlus: 1,
  });
  const { height, width } = useWindowDimensions();

  function handleChangheMe(name: string) {
    if (name != me) setMe(name);
  }

  const Columns: boolean = width > height;
  let styleScrollView = {};
  let styleHeader = {};
  let styleFooter = {};
  if (Columns) {
    // چرخش فعال یا تبلت
    fixPos.current.numFooter = 0; // هندل کردن فوتر موقع چرخش صفحه
    fixPos.current.numFooterPlus = 1; // هندل کردن فوتر موقع چرخش صفحه
    styleScrollView = {
      minHeight: 100,
      maxHeight: "17%",
      marginTop: 10,
      paddingHorizontal: 40,
    };
    styleHeader = {
      marginTop: 5,
    };
    styleFooter = {
      position: "absolute",
      top: 0,
      borderRadius: 10,
      padding: 5,
      right: "10%",
    };
  } else {
    // حالت عادی موبایل
    fixPos.current.numFooter = 0; // هندل کردن فوتر موقع چرخش صفحه
    fixPos.current.numFooterPlus = 1; // هندل کردن فوتر موقع چرخش صفحه
    styleScrollView = {
      minHeight: 370,
      maxHeight: "41%",
      marginTop: 25,
      paddingHorizontal: 18,
    };
    styleHeader = {
      marginTop: 25,
    };
    styleFooter = {
      position: "absolute",
      top: height - 60 * 2,
      alignItems: "flex-end",
      borderRadius: 10,
      alignSelf: "flex-end",
      padding: 10,
      marginTop: 20,
      right: 10,
    };
  }

  const seen = {};
  const newFooterItems = []; // New items for footer images

  for (let i = 0; i < chat_data.length; i++) {
    const name = chat_data[i].name;
    if (!seen[name]) {
      seen[name] = true;
      newFooterItems.push(chat_data[i]);
    }
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

          <View
            style={[
              {
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.8,
                shadowRadius: 40,
                elevation: 3,
              },
              styleFooter,
            ]}
          >
            <FlatList
              data={newFooterItems}
              renderItem={({ item }) => RenderFooter({ item, fixPos })}
              key={"IMG-Footer"}
              horizontal
              scrollEnabled={false}
              keyExtractor={(_, index) => "$" + index}
            />
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
