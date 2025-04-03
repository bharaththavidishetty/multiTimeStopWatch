import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const GreenStar = (props: SvgProps) => (
  <Svg width={13} height={13} fill="none" {...props}>
    <Rect width={12} height={12} x={0.175} y={0.428} fill="#12B347" rx={2} />
    <Path
      fill="#fff"
      d="M10.92 5.653 8.795 7.724l.502 2.925a.341.341 0 0 1-.495.36L6.175 9.628l-2.626 1.38a.341.341 0 0 1-.495-.36l.501-2.924L1.43 5.653a.341.341 0 0 1 .19-.582l2.936-.426L5.87 1.984c.115-.233.497-.233.612 0l1.313 2.66 2.937.427a.342.342 0 0 1 .19.582Z"
    />
  </Svg>
);
export default GreenStar;
