import { StyleSheet, Text, Modal, View, Image, Pressable } from "react-native";
import { useState } from "react";

const modalShowImage = ({ modalVisible, infoImage, onPressImage }) => {
  //   const [modalVisible, setModalVisible] = useState(true);
  // console.log(infoImage, "ii");
  try {
    if (infoImage.image != null)
      return (
        <View className="flex-1">
          <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            statusBarTranslucent
            onRequestClose={onPressImage}
          >
            <Pressable
            className="flex-1 absolute w-full h-full bg-emerald-900 z-10"
              // style={{
              //   // position: "absolute",
              //   // zIndex: 5,
              //   backgroundColor: "rgba(255, 255, 255, 0.3)",
              //   height: "100%",
              //   width: "100%",
              // }}
              onPress={onPressImage}
            >
              <View
                style={{
                  marginVertical: "25%",
                  height: "50%",
                  width: "100%",
                  
                }}
              >
                <Text style={{ color: "white", margin: 20 }}>
                  {modalVisible.image}
                </Text>
                <Image
                  source={infoImage.image}
                  style={{
                    flex: 1,
                    resizeMode: "contain",
                    marginHorizontal: "3%",
                  }}
                />
              </View>
            </Pressable>
          </Modal>
        </View>
      );
  } catch {
    console.log("eeror!");
  }
};

export { modalShowImage };

const styles = StyleSheet.create({});
