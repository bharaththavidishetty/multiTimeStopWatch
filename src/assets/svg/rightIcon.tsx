import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RightIcon = (props: SvgProps) => (
  <Svg
    width={10}
    height={10}
    data-name="Flat Color"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill={'#fff'}
      d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42Z"
    />
  </Svg>
);
export default RightIcon;
