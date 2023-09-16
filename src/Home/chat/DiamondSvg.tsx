import { Svg, Path, G } from "react-native-svg";

export const DiamondSvg = () => {
  return (
    <Svg viewBox="0 0 512 512">
      <Path fill="#ffd54f" d="M96 191.02v-144l160-30.04 160 30.04v144z"></Path>
      <Path fill="#ffecb3" d="M96 191.02L256 16.98l160 174.04z"></Path>
      <Path fill="#ffa000" d="M0 191.02l256 304 256-304z"></Path>
      <Path fill="#ffca28" d="M96 191.02l160 304 160-304z"></Path>
      <G fill="#ffc107">
        <Path d="M0 191.02l96-144v144zM416 47.02v144h96z"></Path>
      </G>
    </Svg>
  );
};