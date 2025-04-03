import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RightArrow = (props: SvgProps) => (
  <Svg width={7} height={12} fill="none" {...props}>
    <Path
      fill="#000000"
      d="m.514 9.894 3.888-3.872L.53 2.134A.996.996 0 1 1 1.943.727l4.58 4.6a.996.996 0 0 1-.003 1.41l-4.6 4.58a.996.996 0 0 1-1.41-.003c-.379-.39-.387-1.03.004-1.42Z"
      {...props}
    />
  </Svg>
);
export default RightArrow;
