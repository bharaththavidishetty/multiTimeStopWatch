import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const AddRound = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#059669"
      d="M8.68.26a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0-8.5-8.5Zm3.864 9.273h-3.09v3.091a.773.773 0 1 1-1.546 0v-3.09H4.817a.773.773 0 1 1 0-1.546h3.09V4.897a.773.773 0 1 1 1.546 0v3.09h3.091a.773.773 0 0 1 0 1.546Z"
    />
  </Svg>
);
export default AddRound;
