import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
const SmallDownArrow = (props: SvgProps) => (
  <Svg width={11} height={8} fill="none" {...props}>
    <Path
      stroke="#00365C"
      strokeWidth={1.5}
      d="M10.084.903 7.56 3.4 5.033 5.897 1.084.893"
    />
  </Svg>
);
export default SmallDownArrow;
