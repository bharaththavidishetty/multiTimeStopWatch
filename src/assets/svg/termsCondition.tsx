import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const TermsCondition = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Circle cx={12} cy={12.23} r={12} fill="#E5F4FF" />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M16.177 4.683v-.89a.277.277 0 0 0-.273-.28H5.51a.277.277 0 0 0-.273.28v11.84M5.237 16.86v1.983c0 .155.122.28.273.28h.863"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M17.312 15.234V4.964a.277.277 0 0 0-.272-.281h-6.337M9.511 4.683H6.645a.277.277 0 0 0-.272.28v15.05c0 .155.122.28.272.28h7.385"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M18.763 17.281c-.276-1.391-1.47-2.438-2.902-2.438-1.635 0-2.961 1.366-2.961 3.052s1.326 3.052 2.961 3.052c1.432 0 2.626-1.047 2.902-2.438"
    />
    <Path
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="m14.493 17.836 1.03 1.076 1.707-1.86M8.458 9.087h6.769M8.458 10.57h.465M9.938 10.57h5.289M8.458 12.052h6.769M8.458 13.535h.465M8.458 15.017h3.98M8.458 16.5h.347M9.934 16.5h.348M11.41 16.5h.348M8.458 17.982h3.3M9.938 13.535h5.289M6.373 6.687h1.672c.15 0 .273-.125.273-.28V4.683L6.373 6.687ZM9.516 6.687h4.653"
    />
  </Svg>
);
export default TermsCondition;
