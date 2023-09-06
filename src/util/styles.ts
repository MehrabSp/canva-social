import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
      color: "white",
    },
    image: {
      flex: 1,
      height: "100%",
      resizeMode: "contain",
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