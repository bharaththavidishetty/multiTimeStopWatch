import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ArrowDown = (props: SvgProps) => (
  <Svg width={12} height={8} fill="none" {...props}>
    <Path
      fill="#64748B"
      d="m2.125.823 3.88 3.88 3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0l-4.59-4.59a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0Z"
    />
  </Svg>
);
export default ArrowDown;
