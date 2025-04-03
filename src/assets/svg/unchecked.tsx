import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Unchecked = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#000"
      d="M2 17.5c-.416 0-.76-.142-1.059-.441A1.427 1.427 0 0 1 .5 16V2c0-.416.142-.76.441-1.059A1.427 1.427 0 0 1 2 .5h14c.416 0 .76.142 1.059.441.299.299.441.643.441 1.059v14c0 .416-.142.76-.441 1.059A1.427 1.427 0 0 1 16 17.5H2Z"
    />
  </Svg>
);
export default Unchecked;
