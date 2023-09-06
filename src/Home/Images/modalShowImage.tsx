import { StyleSheet, Text, Modal, View, Image } from "react-native";
import { useState } from "react";

const modalShowImage = ({ modalVisible, infoImage, onPressImage }) => {
  //   const [modalVisible, setModalVisible] = useState(true);
  // console.log(infoImage, "ii");
  try {
    if (infoImage.image != null)
      return (
        <View style={{ flex: 1 }}>
          <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            statusBarTranslucent
            onRequestClose={onPressImage}
          >
            <View
              style={{
                position: "absolute",
                zIndex: 5,
                backgroundColor: "black",
                height: "100%",
                width: "100%",
              }}
            >
              <Text style={{ color: "white", margin: 20 }}>
                {modalVisible.image}
              </Text>
              <Image
                source={infoImage.image}
                style={{ height: '50%', width: "100%", resizeMode: 'contain' }}
              />
            </View>
          </Modal>
        </View>
      );
  } catch {
    console.log("eeror!");
  }
};

export { modalShowImage };

const styles = StyleSheet.create({});
