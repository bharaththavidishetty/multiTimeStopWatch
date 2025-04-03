import * as React from 'react';
import Svg, {SvgProps, Path, Rect, G} from 'react-native-svg';
const FreeParking = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="surface1">
      <Rect
        width={22.958}
        height={18.7}
        x={0.114}
        y={0.274}
        fill="#E5F4FF"
        rx={2}
      />
      <Path
        d="M2 3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333Z"
        stroke="#00365C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66699 10.6668V5.3335H8.44499C8.93566 5.3335 9.33366 5.93016 9.33366 6.66683C9.33366 7.4035 8.93566 8.00016 8.44499 8.00016H6.66699"
        stroke="#00365C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default FreeParking;
