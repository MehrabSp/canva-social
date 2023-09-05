import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { width } from "../../util/cc";

function getS(s){
    console.log(s)
}
const Images = () => {
    Image.getSize("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2q1SK-d1so1cNOabKmRj0a8y38_zI6uryA&usqp=CAU", getS, )
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="auto" />
      <Image
    //   width={50}
        source={{
          uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
        }}
        style={{ height: 300, width: "100%", resizeMode: "cover" }}
      />
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
          }}
          style={{ width: "50%", height: width, resizeMode: "cover" }}
        />
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
      </View>
      <Image
        source={{
          uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
        }}
        style={{ height: 300, width: "100%", resizeMode: "cover" }}
      />
    </ScrollView>
  );
};

export default Images;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
