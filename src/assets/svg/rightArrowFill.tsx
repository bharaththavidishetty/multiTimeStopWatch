import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RightArrowFill = (props: SvgProps) => (
  <Svg width={9} height={14} fill="none" {...props}>
    <Path
      fill="#00365C"
      d="m.641 13.6 7.392-6.17a.363.363 0 0 0 0-.52L.64.741A.288.288 0 0 0 .317.704.32.32 0 0 0 .19.826a.35.35 0 0 0-.047.175v12.338a.35.35 0 0 0 .047.175c.03.053.074.095.126.123a.288.288 0 0 0 .324-.038Z"
    />
  </Svg>
);
export default RightArrowFill;
