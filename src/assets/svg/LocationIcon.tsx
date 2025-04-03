import * as React from 'react';
import Svg, {SvgProps, Circle, Mask, Path, G} from 'react-native-svg';
const LocationIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Circle cx={9.312} cy={8.977} r={8.5} fill="#E5F4FF" />
    <Mask
      id="a"
      width={15}
      height={16}
      x={2}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path fill="#fff" d="M2.288 1.953h14.049v14.049H2.287V1.952Z" />
    </Mask>
    <G
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      mask="url(#a)">
      <Path d="M9.312 15.276C7.744 12.924 5 9.736 5 6.991a4.317 4.317 0 0 1 4.312-4.313 4.317 4.317 0 0 1 4.313 4.313c0 2.744-2.745 5.933-4.313 8.285Z" />
      <Path
        fill="#00365C"
        d="M9.312 8.951c-1.08 0-1.96-.88-1.96-1.96s.88-1.96 1.96-1.96c1.081 0 1.96.88 1.96 1.96s-.879 1.96-1.96 1.96Z"
      />
    </G>
  </Svg>
);
export default LocationIcon;
