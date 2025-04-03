import * as React from 'react';
import Svg, {SvgProps, Circle, Mask, Path, G} from 'react-native-svg';
const Address = (props: SvgProps) => (
  <Svg
    width={10}
    height={11}
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={4.9939} cy={5.42639} r={4.9939} fill="#E5F4FF" />
    <Mask
      id="mask0_496_2255"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={1}
      width={10}
      height={9}>
      <Path
        d="M0.866211 1.29931H9.12025V9.55334H0.866211V1.29931Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0_496_2255)">
      <Path
        d="M4.99361 9.12695C4.07228 7.74496 2.45996 5.8716 2.45996 4.25928C2.45996 2.86222 3.59656 1.72563 4.99361 1.72563C6.39066 1.72563 7.52726 2.86222 7.52726 4.25928C7.52726 5.8716 5.91494 7.74496 4.99361 9.12695Z"
        stroke="#00365C"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.99346 5.41101C4.35846 5.41101 3.8418 4.89435 3.8418 4.25935C3.8418 3.62436 4.35846 3.10769 4.99346 3.10769C5.62845 3.10769 6.14511 3.62436 6.14511 4.25935C6.14511 4.89435 5.62845 5.41101 4.99346 5.41101Z"
        fill="#00365C"
        stroke="#00365C"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Address;
