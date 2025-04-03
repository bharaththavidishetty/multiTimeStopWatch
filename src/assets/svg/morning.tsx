import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Morning = (props: SvgProps) => (
  <Svg width={22} height={16} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M5.644 5.38a.612.612 0 0 0 0-.87l-.876-.871a.622.622 0 0 0-.876 0 .612.612 0 0 0 0 .87l.876.87c.242.24.634.24.876 0Zm5.693-2.344c.343 0 .62-.275.62-.615v-1.23a.617.617 0 0 0-.62-.616.617.617 0 0 0-.619.616v1.23c0 .34.277.615.62.615Zm-8.67 7.384h-1.28a.617.617 0 0 0-.62.616c0 .34.277.615.62.615h1.28c.341 0 .619-.275.619-.615a.617.617 0 0 0-.62-.616Zm8.67-6.153c-3.756 0-6.813 3.036-6.813 6.769 0 1.478.471 2.882 1.363 4.061h10.901a6.683 6.683 0 0 0 1.363-4.061c0-3.732-3.057-6.769-6.814-6.769Zm9.952 6.153h-1.28a.617.617 0 0 0-.62.616c0 .34.278.615.62.615h1.28c.342 0 .619-.275.619-.615a.617.617 0 0 0-.62-.616ZM17.907 3.64l-.876.87a.612.612 0 0 0 0 .87c.242.24.634.24.876 0l.876-.87a.612.612 0 0 0 0-.87.622.622 0 0 0-.876 0Z"
    />
    <Path
      fill="url(#b)"
      d="M21.288 14.112H1.386a.617.617 0 0 0-.62.616c0 .34.278.615.62.615h19.902c.343 0 .62-.276.62-.615a.617.617 0 0 0-.62-.616Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.337}
        x2={11.337}
        y1={15.097}
        y2={0.575}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FD5900" />
        <Stop offset={1} stopColor="#FFDE00" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={11.337}
        x2={11.337}
        y1={15.343}
        y2={14.112}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFE59A" />
        <Stop offset={1} stopColor="#FFFFD5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Morning;
