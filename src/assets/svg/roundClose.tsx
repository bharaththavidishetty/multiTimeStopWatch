import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RoundClose = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#00365C"
      d="M8.911.663a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0-8.5-8.5Zm3.278 10.686a.774.774 0 1 1-1.093 1.093l-2.185-2.186-2.185 2.186a.772.772 0 0 1-1.093-1.093L7.82 9.163 5.633 6.977a.772.772 0 1 1 1.093-1.093L8.91 8.07l2.185-2.186a.774.774 0 1 1 1.093 1.093l-2.185 2.186 2.185 2.186Z"
    />
  </Svg>
);
export default RoundClose;
