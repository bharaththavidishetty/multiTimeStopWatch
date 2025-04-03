import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Afternoon = (props: SvgProps) => (
  <Svg width={18} height={20} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M9.04 15.078c2.677 0 4.848-2.157 4.848-4.817s-2.17-4.818-4.849-4.818c-2.678 0-4.849 2.157-4.849 4.818 0 2.66 2.171 4.817 4.85 4.817Z"
    />
    <Path
      fill="url(#b)"
      d="M12.4 6.792 4.257 11.05a4.792 4.792 0 0 1 .737-3.446A4.838 4.838 0 0 1 7.14 5.827a4.875 4.875 0 0 1 5.26.965Z"
    />
    <Path
      fill="url(#c)"
      d="M9.04 4.433a.304.304 0 0 1-.304-.301V1.228a.3.3 0 0 1 .303-.3.304.304 0 0 1 .303.3v2.904a.3.3 0 0 1-.303.3Z"
    />
    <Path
      fill="url(#d)"
      d="M5.955 5.254a.305.305 0 0 1-.263-.15l-.842-1.45a.3.3 0 0 1 .223-.449.305.305 0 0 1 .302.148l.842 1.449a.3.3 0 0 1-.11.411.305.305 0 0 1-.152.04Z"
    />
    <Path
      fill="url(#e)"
      d="M3.696 7.497a.304.304 0 0 1-.151-.04l-2.53-1.452a.303.303 0 0 1-.15-.3.3.3 0 0 1 .222-.251.305.305 0 0 1 .23.03l2.531 1.451a.302.302 0 0 1 .141.34.301.301 0 0 1-.293.222Z"
    />
    <Path
      fill="url(#f)"
      d="M2.87 10.562H1.186a.304.304 0 0 1-.303-.301.3.3 0 0 1 .303-.302H2.87a.304.304 0 0 1 .303.302.3.3 0 0 1-.303.3Z"
    />
    <Path
      fill="url(#g)"
      d="M1.166 15.078a.304.304 0 0 1-.293-.223.3.3 0 0 1 .141-.34l2.531-1.45a.305.305 0 0 1 .452.22.299.299 0 0 1-.149.3l-2.53 1.452a.304.304 0 0 1-.152.04Z"
    />
    <Path
      fill="url(#h)"
      d="M5.112 17.318a.305.305 0 0 1-.262-.15.3.3 0 0 1 0-.301l.842-1.45a.303.303 0 0 1 .525.302l-.842 1.449a.302.302 0 0 1-.263.15Z"
    />
    <Path
      fill="url(#i)"
      d="M9.04 19.594a.304.304 0 0 1-.304-.301V16.39a.3.3 0 0 1 .303-.302.304.304 0 0 1 .303.302v2.903a.3.3 0 0 1-.303.3Z"
    />
    <Path
      fill="url(#j)"
      d="M12.967 17.318a.305.305 0 0 1-.263-.15l-.842-1.449a.3.3 0 0 1 .34-.441.302.302 0 0 1 .185.14l.842 1.449a.3.3 0 0 1-.262.451Z"
    />
    <Path
      fill="url(#k)"
      d="M16.913 15.078a.304.304 0 0 1-.151-.04l-2.531-1.452a.301.301 0 1 1 .303-.522l2.53 1.452a.302.302 0 0 1 .142.339.302.302 0 0 1-.293.223Z"
    />
    <Path
      fill="url(#l)"
      d="M16.893 10.562h-1.684a.304.304 0 0 1-.303-.301.3.3 0 0 1 .303-.302h1.684a.304.304 0 0 1 .303.302.3.3 0 0 1-.303.3Z"
    />
    <Path
      fill="url(#m)"
      d="M14.383 7.497a.304.304 0 0 1-.293-.223.3.3 0 0 1 .141-.339l2.53-1.451a.304.304 0 0 1 .453.221.3.3 0 0 1-.15.3l-2.53 1.452a.304.304 0 0 1-.151.04Z"
    />
    <Path
      fill="url(#n)"
      d="M12.124 5.254a.304.304 0 0 1-.303-.302.3.3 0 0 1 .04-.15l.843-1.449a.303.303 0 0 1 .414-.11.302.302 0 0 1 .11.411l-.841 1.45a.301.301 0 0 1-.263.15Z"
    />
    <Path
      fill="url(#o)"
      d="M4.35 11.465a4.808 4.808 0 0 0 1.722 2.604 4.863 4.863 0 0 0 5.935 0 4.808 4.808 0 0 0 1.722-2.604H4.35Z"
    />
    <Path
      fill="url(#p)"
      d="M8.736 3.035v1.097a.3.3 0 0 0 .303.3.304.304 0 0 0 .303-.3V3.035h-.606Z"
    />
    <Path
      fill="url(#q)"
      d="m5.14 4.153.552.95a.302.302 0 0 0 .302.148.304.304 0 0 0 .253-.22.3.3 0 0 0-.03-.229l-.552-.95-.525.301Z"
    />
    <Path
      fill="url(#r)"
      d="m2.59 6.908.955.549a.304.304 0 0 0 .452-.222.3.3 0 0 0-.149-.3l-.956-.548-.303.521Z"
    />
    <Path
      fill="url(#s)"
      d="M1.766 10.562H2.87a.304.304 0 0 0 .303-.301.3.3 0 0 0-.303-.302H1.766v.603Z"
    />
    <Path
      fill="url(#t)"
      d="m2.892 14.134.956-.548a.302.302 0 0 0 .111-.412.303.303 0 0 0-.414-.11l-.956.549.303.521Z"
    />
    <Path
      fill="url(#u)"
      d="m5.665 16.669.552-.95a.3.3 0 0 0-.34-.441.303.303 0 0 0-.185.14l-.552.95.525.3Z"
    />
    <Path
      fill="url(#v)"
      d="M9.342 17.486V16.39a.3.3 0 0 0-.303-.302.304.304 0 0 0-.303.302v1.096h.606Z"
    />
    <Path
      fill="url(#w)"
      d="m12.939 16.368-.552-.95a.303.303 0 0 0-.525.301l.552.95.525-.301Z"
    />
    <Path
      fill="url(#x)"
      d="m15.49 13.613-.956-.549a.304.304 0 0 0-.414.11.3.3 0 0 0 .11.412l.957.548.303-.521Z"
    />
    <Path
      fill="url(#y)"
      d="M16.313 9.96h-1.104a.304.304 0 0 0-.303.3.3.3 0 0 0 .303.302h1.104v-.603Z"
    />
    <Path
      fill="url(#z)"
      d="m15.187 6.387-.956.548a.302.302 0 0 0-.111.412.302.302 0 0 0 .302.148.304.304 0 0 0 .112-.038l.956-.549-.303-.521Z"
    />
    <Path
      fill="url(#A)"
      d="m12.414 3.852-.552.95a.3.3 0 0 0 .11.411.305.305 0 0 0 .415-.11l.552-.95-.525-.3Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={4.19}
        x2={13.888}
        y1={10.261}
        y2={10.261}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={8.145}
        x2={6.431}
        y1={8.664}
        y2={6.234}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FEFFC0" stopOpacity={0} />
        <Stop offset={1} stopColor="#F8FF9B" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={9.342}
        x2={8.736}
        y1={2.68}
        y2={2.68}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={5.755}
        x2={5.371}
        y1={4.101}
        y2={4.325}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={2.581}
        x2={2.274}
        y1={6.213}
        y2={6.748}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={2.028}
        x2={2.028}
        y1={9.959}
        y2={10.508}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={2.303}
        x2={2.565}
        y1={13.831}
        y2={14.287}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={5.318}
        x2={5.786}
        y1={16.169}
        y2={16.441}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={8.736}
        x2={9.342}
        y1={17.841}
        y2={17.841}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={12.283}
        x2={12.806}
        y1={16.443}
        y2={16.139}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={15.496}
        x2={15.797}
        y1={14.312}
        y2={13.788}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={16.051}
        x2={16.051}
        y1={10.562}
        y2={9.959}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={15.8}
        x2={15.499}
        y1={6.731}
        y2={6.208}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={12.808}
        x2={12.285}
        y1={4.379}
        y2={4.075}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F4F42A" />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={9.039}
        x2={9.039}
        y1={11.465}
        y2={15.078}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={-0.658}
        x2={-0.359}
        y1={3.035}
        y2={4.433}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={-2.996}
        x2={-2.037}
        y1={8.82}
        y2={9.886}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={-2.108}
        x2={-0.74}
        y1={14.991}
        y2={15.435}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={1.766}
        x2={3.172}
        y1={19.895}
        y2={19.59}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={7.589}
        x2={8.65}
        y1={22.217}
        y2={21.25}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="u"
        x1={13.801}
        x2={14.237}
        y1={21.336}
        y2={19.973}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="v"
        x1={18.737}
        x2={18.438}
        y1={17.486}
        y2={16.088}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1={21.075}
        x2={20.116}
        y1={11.701}
        y2={10.635}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="x"
        x1={20.187}
        x2={18.819}
        y1={5.53}
        y2={5.086}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="y"
        x1={16.313}
        x2={14.907}
        y1={0.626}
        y2={0.931}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="z"
        x1={10.49}
        x2={9.429}
        y1={-1.696}
        y2={-0.729}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
      <LinearGradient
        id="A"
        x1={4.278}
        x2={3.842}
        y1={-0.814}
        y2={0.548}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFB92B" stopOpacity={0} />
        <Stop offset={1} stopColor="#FFB92B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Afternoon;
