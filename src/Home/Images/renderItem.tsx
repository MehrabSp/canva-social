import { View, Image, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../../util/styles";

const renderItem = ({ item, index, onPressImage }: any) => {
    console.log(index, 'oo')
    // const press = ()
  if (item.images) {
    return (
      <View style={item.style}>
        <Text style={{ position: "absolute", fontSize: 25, color: "orange" }}>
          {item.id}
        </Text>
        <Pressable style={styles.image} onPress={()=>{
            onPressImage({id: item})
        }}>
          <Image source={item.images[0]} style={styles.image} />
        </Pressable>
        <View style={styles.twoImagesContainer}>
          <Pressable style={styles.image} onPress={()=>{
            onPressImage({id: item})
          }}>
            <Image source={item.images[1]} style={styles.image} />
          </Pressable>
          {/* <Image source={{uri: item.images[2]}} style={styles.image} /> */}
        </View>
      </View>
    );
  }
  return (
    <Pressable onPress={()=>{
        onPressImage({id: item})
    }}>
      <Image source={item.image} style={[styles.image, item.style]} />
    </Pressable>
  );
};

export { renderItem };
