// My chats

import { View, Text, Image } from 'react-native'

const CMe = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 40,
        }}
      >
        <View style={{ marginRight: 13 }}>
          <Text style={{ color: "blue", alignSelf: "flex-end" }}>
            {item.name}
          </Text>
          <View
            style={{
              backgroundColor: "#3d42df",
              padding: 15,
              borderRadius: 20,
              borderTopEndRadius: 1,
              marginTop: 10,
            }}
          >
            <Text style={{color: 'white'}}>{item.text}</Text>
          </View>
        </View>
        <Image
          source={{ uri: item.profile_image }}
          style={{ height: 40, width: 40, borderRadius: 10 }}
        />
      </View>
    );
  };

export {CMe}