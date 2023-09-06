import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { width } from "../../util/cc";

type ItemProps = { title: string; image: string };

export function Item({ title, image }: ItemProps) {
  return (
    <View style={{ width }}>
      <StatusBar style="light" />
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
          <Text className="text-blue text-2xl">#{title}</Text>
          <Text className="text-blue text-lg">depress</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export function Item2({ title, image }: ItemProps) {
  return (
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
          <Text className="text-blue text-sm">#{title}</Text>
          <Text className="text-blue text-xs">depress</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export function Item3({ title, image }: ItemProps) {
  return (
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
}
