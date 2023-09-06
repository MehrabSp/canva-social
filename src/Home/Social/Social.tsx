import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { width } from "../../util/cc";
import { dataSocial } from "../../util/data";

const Social = () => {
  type ItemProps = { title: string; image: string };

  const Item = ({ title, image }: ItemProps) => (
    <View style={styles.container}>
      <LinearGradient
        style={{
          height: 250,
          width: "90%",
          backgroundColor: "pink",
          borderRadius: 20,
          marginHorizontal: "5%",
        }}
        colors={["#3f32fa", "#6551fc", "#ff5efc"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.1, y: -0.2 }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            resizeMode: "contain",
          }}
        />

        <View style={{ justifyContent: "flex-end", flex: 1, margin: 20 }}>
          <Text style={[styles.title, { fontSize: 20 }]}>#{title}</Text>
          <Text style={[styles.title, { fontWeight: "bold", fontSize: 13 }]}>
            depress
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
  const Item2 = ({ title, image }: ItemProps) => (
    <View style={{ width: 150 }}>
      <LinearGradient
        style={{
          minHeight: 150,
          // width: "40%",
          backgroundColor: "pink",
          borderRadius: 20,
          marginHorizontal: "5%",
        }}
        colors={["#3f32fa", "#6551fc", "#ff5efc"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.1, y: -0.2 }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            resizeMode: "contain",
          }}
        />

        <View style={{ justifyContent: "flex-end", flex: 1, margin: 20 }}>
          <Text style={[styles.title, { fontSize: 20 }]}>#{title}</Text>
          <Text style={[styles.title, { fontWeight: "bold", fontSize: 13 }]}>
            depress
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
  const Item3 = ({ title, image }: ItemProps) => (
    <View style={{ width: 111 }}>
      <View
        style={{
          minHeight: 111,
          backgroundColor: "whitesmoke",
          borderRadius: 100,
          marginHorizontal: "5%",
        }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            resizeMode: "contain",
          }}
        />

        {/* <View style={{ justifyContent: "flex-end", flex: 1, margin: 20 }}>
                <Text style={[styles.title, { fontSize: 20 }]}>#{title}</Text>
                <Text style={[styles.title, { fontWeight: "bold", fontSize: 13 }]}>
                  depress
                </Text>
              </View> */}
      </View>
    </View>
  );

  return (
    <ScrollView
      style={[
        // styles.container,
        { flex: 1, backgroundColor: "black" },
      ]}
    >
      <FlatList
        data={dataSocial}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{ marginHorizontal: "5%", marginVertical: 20 }}>
        <Text style={[styles.title, { fontSize: 20 }]}>Trending now</Text>
      </View>
      <FlatList
        data={dataSocial}
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item2 title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{ marginHorizontal: "5%", marginVertical: 20 }}>
        <Text style={[styles.title, { fontSize: 20 }]}>Papular people</Text>
      </View>
      <FlatList
        data={dataSocial}
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item3 title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    // height,
  },
  title: {
    color: "white",
  },
});
