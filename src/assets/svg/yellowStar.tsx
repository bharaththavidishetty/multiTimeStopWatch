import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const YellowStar = (props: SvgProps) => (
  <Svg width={14} height={13} fill="none" {...props}>
    <Path
      fill="#FFB02E"
      fillRule="evenodd"
      d="M7.005 10.45 2.987 12.5l.768-4.342L.5 5.083l4.491-.632L7 .5l2.009 3.95 4.491.633-3.255 3.075.768 4.342-4.008-2.05Z"
      clipRule="evenodd"
      {...props}
    />
    <Path
      stroke="#FFB02E"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.005 10.45 2.987 12.5l.768-4.342L.5 5.083l4.491-.632L7 .5l2.009 3.95 4.491.633-3.255 3.075.768 4.342-4.008-2.05Z"
      clipRule="evenodd"
      {...props}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.2}
      d="M7.005 10.45 2.987 12.5l.768-4.342L.5 5.083l4.491-.632L7 .5l2.009 3.95 4.491.633-3.255 3.075.768 4.342-4.008-2.05Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default YellowStar;
