import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Close = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 16 16" {...props}>
    <Path
      fillRule="evenodd"
      d="M11.293 3.293a1 1 0 1 1 1.414 1.414L9.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 8 3.293 4.707a1 1 0 0 1 1.414-1.414L8 6.586l3.293-3.293Z"
    />
  </Svg>
);
export default Close;
