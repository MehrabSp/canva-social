import { StyleSheet, Text, View,
    ScrollView,
    FlatList,
    Image,

} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { width } from '../../util/cc';

const Social = () => {
        const DATA = [
          {
            id: "bd7acbea",
            title: "First Item",
            image:
              "https://www.transparentpng.com/thumb/anime-boy/GzVoMV-anime-boy-cut-out-png.png",
          },
          {
            id: "3ac68afc",
            image:
              "https://www.transparentpng.com/thumb/anime-boy/fRZVsA-anime-boy-clipart-hd.png",
            title: "Second Item",
          },
          {
            id: "58888694a0f",
            image:
              "https://www.transparentpng.com/thumb/anime-boy/KRE3FV-anime-boy-png-picture.png",
            title: "Third Item",
          },
          {
            id: "57778694a0f",
            image:
              "https://p7.hiclipart.com/preview/218/63/782/uchiha-clan-naruto-anime-manga-naruto.jpg",
            title: "Four Item",
          },
          {
            id: "58666694a0f",
            image:
              "https://p7.hiclipart.com/preview/218/63/782/uchiha-clan-naruto-anime-manga-naruto.jpg",
            title: "Five Item",
          },
        ];
      
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
              data={DATA}
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
              data={DATA}
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
              data={DATA}
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
      
}

export default Social

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
  