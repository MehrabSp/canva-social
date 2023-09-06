import { StyleSheet, Text, Modal, View } from "react-native";
import { useState } from "react";

const modalShowImage = ({ modalVisible, onPressImage }) => {
  //   const [modalVisible, setModalVisible] = useState(true);

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
          <Text style={{ color: "white" }}>modalShowImage</Text>
        </View>
      </Modal>
    </View>
  );
};

export { modalShowImage };

const styles = StyleSheet.create({});
