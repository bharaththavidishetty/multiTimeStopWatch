import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
const Notification = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      stroke="#64748B"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M8.651 2.722c-2.207 0-4 1.794-4 4V8.65c0 .407-.173 1.027-.38 1.373l-.767 1.274c-.473.786-.146 1.66.72 1.953 2.874.96 5.974.96 8.847 0a1.335 1.335 0 0 0 .72-1.954l-.767-1.273c-.2-.347-.373-.966-.373-1.373V6.722c0-2.2-1.8-4-4-4Z"
    />
    <Circle
      cx={5.638}
      cy={5.782}
      r={2.75}
      fill="#64748B"
      stroke="#64748B"
      strokeWidth={0.5}
    />
    <Path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.884 2.915a4.503 4.503 0 0 0-2.467 0 1.324 1.324 0 0 1 2.467 0Z"
    />
    <Path
      stroke="#64748B"
      strokeMiterlimit={10}
      d="M10.651 13.489c0 1.1-.9 2-2 2a2.007 2.007 0 0 1-2-2"
    />
    <Circle cx={5.638} cy={5.782} r={2.25} stroke="#fff" strokeWidth={1.5} />
  </Svg>
);
export default Notification;
