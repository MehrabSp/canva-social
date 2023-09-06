import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Image,
  FlatList,
} from "react-native";
import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { width } from "../../util/cc";
import { dataImages } from "../../util/data";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Images = () => {
  const renderItem = ({ item }) => {
    if (item.images) {
      return (
        <View style={item.style}>
          <Image source={{ uri: item.images[0] }} style={styles.image} />
          <View style={styles.twoImagesContainer}>
            <Image source={{ uri: item.images[1] }} style={styles.image} />
            {/* <Image source={{uri: item.images[2]}} style={styles.image} /> */}
          </View>
        </View>
      );
    }
    return (
      <Image source={{ uri: item.image }} style={[styles.image, item.style]} />
    );
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);

  console.log(refreshing, 'refreshing');

  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      {/* <StatusBar style="auto" /> */}
      <FlatList
        data={dataImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#7a7978", "#44f2db", "#f748b7", "#f7731b"]}
            progressBackgroundColor={"white"}
            //  size={'large'}
            progressViewOffset={20}
          />
        }
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
    justifyContent: "space-between",
  },
  twoImagesContainer: {
    flex: 1,
    // marginLeft: 5,
  },
  lastImage: {
    height: 250,
  },
});
