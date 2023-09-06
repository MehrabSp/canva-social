import { Text, View, RefreshControl, FlatList } from "react-native";
import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { width } from "../../util/cc";
import { dataImages } from "../../util/data";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { renderItem as Items } from "./renderItem";
import { modalShowImage as ModalImage } from "./modalShowImage";

const Images = () => {
  const [showImage, setShowImage] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);

  const onPressImage = React.useCallback(() => {
    setShowImage(!showImage);
  }, [showImage]);

  console.log(refreshing, "refreshing");
  console.log(showImage, "showImage");

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      {/* <StatusBar style="auto" /> */}
      <ModalImage modalVisible={showImage} onPressImage={onPressImage} />
      <FlatList
        data={dataImages}
        renderItem={(items) => {
          return <Items {...items} onPressImage={onPressImage} />;
        }}
        keyExtractor={(item) => item.id}
        // numColumns={3}
        // onLayout={(event) => {
        //   const { width } = event.nativeEvent.layout;
        //   const newNumColumns = Math.floor(width / 200);
        //   setNumColumns(newNumColumns > 0 ? newNumColumns : 1);
        // }}
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
