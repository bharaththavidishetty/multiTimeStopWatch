import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Defs,
  Rect,
  ClipPath,
  Use,
  Path,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const FourWheel = (props: SvgProps) => (
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
      <G id="g1665" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
        <G id="g1667">
          <G>
            <Defs>
              <Rect
                id="SVGID_1_"
                x={-0.83}
                y={496.17}
                width={16.67}
                height={16.67}
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
            <G id="g1669" className="st0">
              <G id="g1675" transform="translate(196,256)">
                <G id="path1677">
                  <Path
                    d="M-188.13,248.32h-1.83c-0.1,0-0.18,0.08-0.18,0.18v2.2c0,0.1,0.08,0.18,0.18,0.18h1.83c0.71,0,1.28-0.57,1.28-1.28 C-186.85,248.89-187.43,248.32-188.13,248.32z M-189.78,248.68h1.65c0.5,0,0.92,0.41,0.92,0.92c0,0.5-0.41,0.92-0.92,0.92 h-1.65V248.68z"
                    fill="#00365C"
                  />
                </G>
              </G>
              <G id="g1679" transform="translate(271,406)">
                <G id="path1681">
                  <Path
                    d="M-264.96,94.65h-1.46c-0.1,0-0.18,0.08-0.18,0.18v7.32c0,0.1,0.08,0.18,0.18,0.18h3.3c1.51,0,2.75-1.23,2.75-2.75 s-1.23-2.75-2.75-2.75h-1.65v-2.01C-264.78,94.74-264.86,94.65-264.96,94.65z M-266.25,95.02h1.1v2.01 c0,0.1,0.08,0.18,0.18,0.18h1.83c1.31,0,2.38,1.07,2.38,2.38c0,1.31-1.07,2.38-2.38,2.38h-3.11V95.02z"
                    fill="#00365C"
                  />
                </G>
              </G>
              <G id="g1683" transform="translate(266,10)">
                <G id="path1685">
                  <Path d="M-258.26,488.49c0-0.13-0.11-0.24-0.24-0.24s-0.24,0.11-0.24,0.24c0,0.13,0.11,0.24,0.24,0.24 S-258.26,488.63-258.26,488.49" />
                </G>
              </G>
              <G id="g1687" transform="translate(211,10)">
                <G id="path1689">
                  <Path
                    d="M-198.23,488.31h-4.17c-0.1,0-0.18,0.08-0.18,0.18c0,0.1,0.08,0.18,0.18,0.18h4.17c0.3,0,0.55,0.25,0.55,0.55v10.55 c0,0.3-0.25,0.55-0.55,0.55h-10.55c-0.3,0-0.55-0.25-0.55-0.55v-10.55c0-0.3,0.25-0.55,0.55-0.55h4.17 c0.1,0,0.18-0.08,0.18-0.18c0-0.1-0.08-0.18-0.18-0.18h-4.17c-0.5,0-0.92,0.41-0.92,0.92v10.55c0,0.5,0.41,0.92,0.92,0.92 h10.55c0.5,0,0.92-0.41,0.92-0.92v-10.55C-197.31,488.72-197.72,488.31-198.23,488.31z"
                    fill="#00365C"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default FourWheel;
