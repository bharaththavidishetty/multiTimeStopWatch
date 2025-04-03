import * as React from 'react';
import Svg, {SvgProps, G, Path, Rect} from 'react-native-svg';
const FemaleToilet = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={20}
    height={20}
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
      <G>
        <G>
          <G>
            <G>
              <Path
                d="M10,2.25c-1.03,0-1.86,0.83-1.86,1.86c0,1.03,0.83,1.86,1.86,1.86c1.03,0,1.86-0.83,1.86-1.86S11.03,2.25,10,2.25z  M10,5.35c-0.68,0-1.24-0.56-1.24-1.24S9.32,2.87,10,2.87s1.24,0.56,1.24,1.24S10.68,5.35,10,5.35z"
                fill="#00365C"
              />
            </G>
          </G>
        </G>
        <G>
          <G>
            <G>
              <Path
                d="M13.4,13.01l-1.86-6.2c-0.04-0.13-0.16-0.22-0.3-0.22H8.76c-0.14,0-0.26,0.09-0.3,0.22l-1.86,6.2 c-0.03,0.09-0.01,0.2,0.05,0.27c0.06,0.08,0.15,0.12,0.25,0.12h1.24v4.03c0,0.17,0.14,0.31,0.31,0.31h3.1 c0.17,0,0.31-0.14,0.31-0.31v-4.03h1.24c0.17,0,0.31-0.14,0.31-0.31C13.41,13.07,13.41,13.04,13.4,13.01z M11.55,12.79 c-0.17,0-0.31,0.14-0.31,0.31v4.03h-0.93v-4.34H9.69v4.34H8.76V13.1c0-0.17-0.14-0.31-0.31-0.31H7.32l1.67-5.58h2.02l1.67,5.58 H11.55z"
                fill="#00365C"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default FemaleToilet;
