import * as React from 'react';
import Svg, {SvgProps, Rect, Mask, Path, G} from 'react-native-svg';
const Amenities = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Rect width={15} height={15} x={0.391} y={0.416} fill="#E5F4FF" rx={2} />
    <Mask
      id="a"
      width={14}
      height={14}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
        d="M14.055 14.08V1.752H1.727V14.08h12.328Z"
      />
    </Mask>
    <G stroke="#00365C" strokeMiterlimit={10} strokeWidth={0.5} mask="url(#a)">
      <Path d="M13.93 9.444v.752H5.732v-.752c0-.83.673-1.503 1.503-1.503h5.19c.83 0 1.503.673 1.503 1.503ZM13.93 11.699v.752c0 .83-.674 1.503-1.504 1.503h-5.19c-.83 0-1.503-.673-1.503-1.503v-.752h8.196Z" />
      <Path d="M13.178 10.196v1.503H6.486l-.002-1.503h6.694Z" />
      <Path d="M7.165 13.954h-4.06l-.5-8.294h6.263l-.137 2.28M9.62 5.66H1.853V4.179H9.62v1.48Z" />
      <Path d="M2.77 8.385c1.484 0 1.478 1.366 2.963 1.366M5.737 4.179V1.878H4.62" />
    </G>
  </Svg>
);
export default Amenities;
