import * as React from 'react';
import Svg, {SvgProps, Rect, Path, Circle} from 'react-native-svg';
const Email = (props: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12.077} r={12} fill="#E5F4FF" />
    <Rect
      x={3}
      y={6}
      width={18}
      height={12}
      rx={2}
      stroke="#00365C"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.5737 7L12 13L3.42635 7"
      stroke="#00365C"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Email;
