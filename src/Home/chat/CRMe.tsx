// My repeated chats

import { View, Text } from 'react-native'

const CRMe = ({ item }) => {
    return (
      <View style={{ marginLeft: 53 }}>
        <View
          style={{
            backgroundColor: "#f3f4f9",
            padding: 15,
            borderRadius: 20,
            borderTopStartRadius: 1,
            marginTop: 8,
          }}
        >
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };

export {CRMe}