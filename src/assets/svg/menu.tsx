import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const MenuIcon = (props: SvgProps) => (
  <Svg width={27} height={27} fill="none" {...props}>
    <Rect width={27} height={26} y={0.782} fill="#CCEAFF" rx={5} />
    <Path
      fill="#00365C"
      d="M4.125 20.032V17.95h18.75v2.083H4.125Zm0-5.208V12.74h18.75v2.083H4.125Zm0-5.208V7.532h18.75v2.084H4.125Z"
    />
  </Svg>
);
export default MenuIcon;
