import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const RedStar = (props: SvgProps) => (
  <Svg width={13} height={13} fill="none" {...props}>
    <Rect width={12} height={12} x={0.874} y={0.859} fill="#FF2626" rx={2} />
    <Path
      fill="#fff"
      d="M11.62 6.083 9.494 8.154l.501 2.925a.342.342 0 0 1-.495.36l-2.627-1.381-2.626 1.38a.341.341 0 0 1-.495-.36l.501-2.924-2.124-2.07a.341.341 0 0 1 .189-.583l2.936-.426 1.313-2.661c.115-.233.497-.233.612 0l1.313 2.661 2.937.426a.342.342 0 0 1 .19.582Z"
    />
  </Svg>
);
export default RedStar;
