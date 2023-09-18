
import {
  Dimensions,

} from 'react-native'
export const { width, height } = Dimensions.get("screen");

export const colors = {
  dark: {
    background: "#3c3f56",
    chat: "#2c3046",
    text: "rgba(255,255,255,0.8)",
    inputText: "#2c3046",
    backgroundIcon: "#3c3f56",
    icon: "white",
  },
  light: {
    background: "#eaebf5",
    chat: "#f3f4f9",
    text: "#2c303a",
    inputText: "#f3f4f9",
    backgroundIcon: "white",
    icon: "black",
  },
};