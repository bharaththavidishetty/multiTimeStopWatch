import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Location = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      fill={'#fff'}
      d="M3.055 13H1v-2h2.055A9.004 9.004 0 0 1 11 3.055V1h2v2.055A9.004 9.004 0 0 1 20.945 11H23v2h-2.055A9.004 9.004 0 0 1 13 20.945V23h-2v-2.055A9.004 9.004 0 0 1 3.055 13ZM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
    />
  </Svg>
);
export default Location;
