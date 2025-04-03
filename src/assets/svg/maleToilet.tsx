import * as React from 'react';
import Svg, {SvgProps, G, Path, Rect} from 'react-native-svg';
const MaleToilet = (props: SvgProps) => (
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
      <G>
        <G>
          <G>
            <G>
              <Path
                d="M10,1C8.81,1,7.84,1.97,7.84,3.16S8.81,5.32,10,5.32c1.19,0,2.16-0.97,2.16-2.16C12.16,1.97,11.19,1,10,1z M10,4.6 c-0.8,0-1.44-0.64-1.44-1.44S9.2,1.72,10,1.72s1.44,0.64,1.44,1.44S10.8,4.6,10,4.6z"
                fill="#00365C"
              />
            </G>
          </G>
        </G>
        <G>
          <G>
            <G>
              <Path
                d="M11.08,6.04H8.92c-1.39,0-2.52,1.13-2.52,2.52v5.04c0,0.2,0.16,0.36,0.36,0.36h1.08v4.68C7.84,18.84,8,19,8.2,19h3.6 c0.2,0,0.36-0.16,0.36-0.36v-4.68h1.08c0.2,0,0.36-0.16,0.36-0.36V8.56C13.6,7.17,12.47,6.04,11.08,6.04z M12.88,13.24h-0.72 V8.92h-0.72v9.36h-1.08v-5.04H9.64v5.04H8.56V8.92H7.84v4.32H7.12V8.56c0-0.99,0.81-1.8,1.8-1.8h2.16c0.99,0,1.8,0.81,1.8,1.8 V13.24z"
                fill="#00365C"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default MaleToilet;
