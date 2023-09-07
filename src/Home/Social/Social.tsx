import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { width } from "../../util/cc";
import { dataSocial } from "../../util/data";
import { StatusBar } from "expo-status-bar";
import { Item, Item2, Item3 } from "./Item";

const Social = () => {

  return (
    <ScrollView
      style={[
        // styles.container,
        { flex: 1, backgroundColor: "black" },
      ]}
    >
      <FlatList
        data={dataSocial}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{ marginHorizontal: "5%", marginVertical: 20 }}>
        <Text style={[styles.title, { fontSize: 20 }]}>Trending now</Text>
      </View>
      <FlatList
        data={dataSocial}
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item2 title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{ marginHorizontal: "5%", marginVertical: 20 }}>
        <Text style={[styles.title, { fontSize: 20 }]}>Papular people</Text>
      </View>
      <FlatList
        data={dataSocial}
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item3 title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    // height,
  },
  title: {
    color: "white",
  },
});
