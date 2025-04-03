import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const FilterIcon = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Rect width={29} height={29} x={0.953} y={0.134} fill="#CCEAFF" rx={5} />
    <Path
      fill="#1E293B"
      d="M12.453 18.384a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-3-4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5h-10.5a.75.75 0 0 1-.75-.75Zm-3-4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75Z"
    />
  </Svg>
);
export default FilterIcon;
