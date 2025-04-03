import * as React from 'react';
import Svg, {
  SvgProps,
  Defs,
  Mask,
  Rect,
  G,
  ClipPath,
  Use,
  Path,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, filter */
const PaidParking = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    x="0px"
    y="0px"
    viewBox="0 0 20 20"
    style={{
      enableBackground: 'new 0 0 20 20',
    }}
    xmlSpace="preserve"
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
      <Defs></Defs>
      <Mask
        maskUnits="userSpaceOnUse"
        x={1.87}
        y={1.87}
        width={16.26}
        height={16.26}
        id="custom_2_">
        <Rect
          id="bg_2_"
          x={1.87}
          y={1.87}
          className="st0"
          width={16.26}
          height={16.26}
          fill="#00365C"
        />
        <G transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)" />
      </Mask>
      <G className="st1">
        <G id="g2646" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
          <G id="g2648">
            <G>
              <Defs>
                <Rect
                  id="SVGID_1_"
                  x={-0.63}
                  y={496.37}
                  width={16.26}
                  height={16.26}
                  fill="#00365C"
                />
              </Defs>
              <ClipPath id="SVGID_2_">
                <Use
                  xlinkHref="#SVGID_1_"
                  style={{
                    overflow: 'visible',
                  }}
                />
              </ClipPath>
              <G id="g2650" className="st2">
                <G id="g2656" transform="translate(356,20)">
                  <G id="path2658">
                    <Path
                      d="M-346.12,478.52h-7.05c-0.72,0-1.31,0.59-1.31,1.31v9.34c0,0.72,0.59,1.31,1.31,1.31h9.34 c0.72,0,1.31-0.59,1.31-1.31v-3.67h-0.71v3.67c0,0.33-0.27,0.6-0.6,0.6h-9.34c-0.33,0-0.6-0.27-0.6-0.6v-9.34 c0-0.33,0.27-0.6,0.6-0.6h7.05V478.52z"
                      fill="#00365C"
                    />
                  </G>
                </G>
                <G id="g2660" transform="translate(286,232)">
                  <G id="path2662">
                    <Path
                      d="M-277.79,271.57H-281v4.53h3.22c1.25,0,2.26-1.02,2.26-2.26C-275.52,272.59-276.54,271.57-277.79,271.57z  M-280.29,272.29h2.5c0.85,0,1.55,0.69,1.55,1.55c0,0.85-0.69,1.55-1.55,1.55h-2.5V272.29z"
                      fill="#00365C"
                    />
                  </G>
                </G>
                <G id="g2664" transform="translate(166,100)">
                  <G id="path2666">
                    <Rect
                      x={-161.12}
                      y={399.65}
                      width={0.95}
                      height={9.09}
                      fill="#00365C"
                    />
                  </G>
                </G>
                <G id="g2668" transform="translate(452,39.4512)">
                  <G id="path2670">
                    <Rect
                      x={-440.31}
                      y={458.84}
                      width={0.95}
                      height={1.6}
                      fill="#00365C"
                    />
                  </G>
                </G>
                <G id="g2672" transform="translate(451,238)">
                  <G id="path2674">
                    <Rect
                      x={-439.33}
                      y={264.83}
                      width={0.95}
                      height={1.83}
                      fill="#00365C"
                    />
                  </G>
                </G>
                <G id="g2676" transform="translate(411,87.8652)">
                  <G id="path2678">
                    <Path
                      d="M-398.83,411.28c-0.72,0-1.33,0.62-1.33,1.35h0.71c0-0.34,0.29-0.63,0.62-0.63c0.33,0,0.62,0.29,0.62,0.63 c0,0.27-0.25,0.43-0.77,0.71l-0.01,0.01c-0.42,0.22-1.05,0.55-1.05,1.36c0,0.64,0.56,1.17,1.21,1.17 c0.66,0,1.19-0.52,1.19-1.17h-0.71c0,0.25-0.22,0.45-0.48,0.45c-0.27,0-0.5-0.22-0.5-0.46c0-0.33,0.2-0.48,0.66-0.73 l0.01-0.01c0.52-0.27,1.16-0.6,1.16-1.34C-397.5,411.9-398.11,411.28-398.83,411.28z"
                      fill="#00365C"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default PaidParking;
