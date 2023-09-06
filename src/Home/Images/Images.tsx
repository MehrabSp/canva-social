import { StyleSheet, Text, View, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { width } from "../../util/cc";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Images = () => {

  const DATA = [
    {
      id: "1",
      image:
        "https://e0.pxfuel.com/wallpapers/568/276/desktop-wallpaper-minimalist-dark.jpg",
      style: styles.firstImage,
    },
    {
      id: "2",
      images: [
        "https://e0.pxfuel.com/wallpapers/799/827/desktop-wallpaper-dark-female-black.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2q1SK-d1so1cNOabKmRj0a8y38_zI6uryA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2q1SK-d1so1cNOabKmRj0a8y38_zI6uryA&usqp=CAU",
      ],
      style: styles.thImages,
    },
    {
      id: "3",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw81-kt1o_H5tbk3w7nsDIGaTOVZE7ApGUNA&usqp=CAU",
        "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
      ],
      style: styles.twoImages,
    },
    {
      id: "4",
      image:
        "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
      style: styles.lastImage,
    },
  ];

  const renderItem = ({ item }) => {
    if (item.images) {
      return (
        <View style={item.style}>
          <Image source={{uri: item.images[0]}} style={styles.image} />
          <View style={styles.twoImagesContainer}>
            <Image source={{uri: item.images[1]}} style={styles.image} />
            {/* <Image source={{uri: item.images[2]}} style={styles.image} /> */}
          </View>
        </View>
      );
    }
    return (
      <Image source={{uri: item.image}} style={[styles.image, item.style]} />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <StatusBar style="auto" />
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
  image: {
    flex: 1,
    height: "100%",
    resizeMode: "cover",
  },
  firstImage: {
    height: 200,
  },
  twoImages: {
    height: 200,
    flexDirection: "row",
  },
  thImages: {
    height: 200,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  twoImagesContainer: {
    flex: 1,
    // marginLeft: 5,
  },
  lastImage: {
    height: 250,
  },
});
