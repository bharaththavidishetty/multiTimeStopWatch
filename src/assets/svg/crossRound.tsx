import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CrossRound = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#DC2626"
      d="M8.68.959a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0-8.5-8.5Zm3.279 10.686a.773.773 0 1 1-1.093 1.093L8.68 10.552l-2.186 2.186a.773.773 0 0 1-1.092-1.093l2.185-2.186-2.185-2.186A.773.773 0 1 1 6.495 6.18l2.186 2.186 2.185-2.186a.773.773 0 1 1 1.093 1.093L9.773 9.459l2.186 2.186Z"
    />
  </Svg>
);
export default CrossRound;
