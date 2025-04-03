import color from '@theme/color';
import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
const RadioButton = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Rect
      width={13}
      height={13}
      x={0.708}
      y={0.959}
      fill="#fff"
      stroke={color.secondary}
      rx={6.5}
    />
    <Rect
      width={9.397}
      height={9.38}
      x={2.51}
      y={2.769}
      fill="#94A3B8"
      rx={4.69}
    />
  </Svg>
);
export default RadioButton;
