import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const MyBooking = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Circle cx={12} cy={12.025} r={12} fill="#E5F4FF" />
    <Path
      stroke="#00365C"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M11.862 16.09v.953c0 .293.237.53.53.53h.894"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M11.773 6.092h.066M12.71 6.092h.066M13.646 6.092h.066M4.65 6.092h.066M10.224 10.597l-1.29 1.581-.795-.907M18.588 18.985h1.192a.53.53 0 0 0 .53-.53V10.15a.53.53 0 0 0-.53-.53h-5.964a.53.53 0 0 0-.53.53v8.305c0 .293.238.53.53.53h3.602"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M17.949 13.318h-2.3a.957.957 0 0 0-.958.957v.728c0 .184.15.334.335.334h3.545c.185 0 .335-.15.335-.334v-.728a.957.957 0 0 0-.957-.957Z"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M16.799 13.318a1.186 1.186 0 1 0 0-2.373 1.186 1.186 0 0 0 0 2.373ZM18.379 17.66h-3.161a.527.527 0 1 1 0-1.054h3.161a.527.527 0 1 1 0 1.054ZM5.946 5.066H4.191a.502.502 0 0 0-.502.501V7.12h10.986V5.567a.502.502 0 0 0-.502-.501H7.117"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M13.287 10.15a.53.53 0 0 1 .53-.53h.858V7.118H3.689v8.47c0 .277.225.501.502.501h9.096v-5.94Z"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M14.674 9.62h4.212v-.883a.53.53 0 0 0-.53-.53h-3.682V9.62Z"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M16.932 6.511h-2.258v1.696h2.788V7.041a.53.53 0 0 0-.53-.53ZM7.625 13.532a2.65 2.65 0 1 0-.774-.881"
    />
  </Svg>
);
export default MyBooking;
