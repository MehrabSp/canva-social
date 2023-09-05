import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { width } from "../../util/cc";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Images = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="auto" />
      <View>
        <View
          style={{
            position: "absolute",
            zIndex: 5,
            bottom: 0,
            flexDirection: "row",
            margin: 20,
          }}
        >
          <Ionicons name="ios-heart-outline" size={20} color="#fff" />
          <Text style={styles.title}>10k</Text>
        </View>
        <Image
          //   width={50}
          source={{
            uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
          }}
          style={{ height: 300, width: "100%", resizeMode: "cover" }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw81-kt1o_H5tbk3w7nsDIGaTOVZE7ApGUNA&usqp=CAU",
            }}
            style={{ width: "100%", height: width / 2 }}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2q1SK-d1so1cNOabKmRj0a8y38_zI6uryA&usqp=CAU",
            }}
            style={{ width: width / 2, height: width / 2 }}
          />
        </View>
        <View style={{ width, height: width }}>
          <View
            style={{
              position: "absolute",
              zIndex: 5,
              bottom: 0,
              flexDirection: "row",
              margin: 20,
            }}
          >
            <Ionicons name="ios-heart-outline" size={20} color="#fff" />
            <Text style={styles.title}>10k</Text>
          </View>
          <Image
            source={{
              uri: "https://e0.pxfuel.com/wallpapers/799/827/desktop-wallpaper-dark-female-black.jpg",
            }}
            style={{ width: "50%", height: width, resizeMode: "contain" }}
          />
        </View>
      </View>

      <View>
        <View
          style={{
            position: "absolute",
            zIndex: 5,
            bottom: 0,
            flexDirection: "row",
            margin: 20,
          }}
        >
          <Ionicons name="ios-heart-outline" size={20} color="#fff" />
          <Text style={styles.title}>10k</Text>
        </View>
        <Image
          source={{
            uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
          }}
          style={{ height: 300, width: "100%", resizeMode: "cover" }}
        />
      </View>
    </ScrollView>
  );
};

export default Images;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
