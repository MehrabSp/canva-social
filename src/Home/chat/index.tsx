import { Text, View, ScrollView, FlatList, TextInput } from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { Feather } from "@expo/vector-icons";
import { chat_data } from "./data";
import { Render } from "./Render";

export const Chat = () => {
  const [me, setMe] = useState("Jessica Bell");
  const fixPos = useRef({
    lastName: null,
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView>
        <ScrollView scrollEnabled={false}>
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
            // scrollEnabled={false}
          >
            <FlatList
              data={chat_data}
              renderItem={({ item }) => Render({ item, me, fixPos })}
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
