import * as React from 'react';
import Svg, {SvgProps, Rect, Mask, Path, G} from 'react-native-svg';
const Parking = (props: SvgProps) => (
  <Svg width={24} height={21} fill="none" {...props}>
    <Rect
      width={22.958}
      height={19.916}
      x={0.794}
      y={0.809}
      fill="#E5F4FF"
      rx={2}
    />
    <Mask
      id="a"
      width={19}
      height={18}
      x={3}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
        d="M21.469 19.017v-16.5H3.344v16.5H21.47Z"
      />
    </Mask>
    <G
      stroke="#00365C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      mask="url(#a)">
      <Path d="M4.14 17.604h2.49c.425 0 .774.317.774.705v.562c0 .079-.072.144-.16.144h-3.72c-.086 0-.157-.065-.157-.144v-.562c0-.388.347-.705.773-.705ZM7.84 8.69h5.729c.13 0 .236-.097.236-.215V3.246c0-.118-.106-.215-.236-.215H7.84c-.13 0-.236.097-.236.215v5.229c0 .118.106.215.236.215ZM4.687 12.305V3.152c0-.35.313-.636.697-.636.383 0 .696.286.696.636v14.452H4.687v-4.163" />
      <Path d="M6.082 4.804h1.523v-1.2H6.082v1.2ZM6.082 8.117h1.523v-1.2H6.082v1.2ZM19.393 11.99h1.215c.46 0 .838.346.838.77 0 .423-.378.77-.838.77h-.416" />
      <Path d="M15.735 17.743h4.824c.284 0 .293-.103.293-.378v-2.17c0-.379.02-.359-.159-.701l-1.731-3.334c-.443-.852-.53-.841-1.585-.839h-4.541c-1.055-.002-1.142-.013-1.584.839l-1.731 3.334c-.179.342-.16.322-.16.702v2.17c0 .274.01.377.294.377h4.839M10.02 13.53h10.172" />
      <Path d="M10.82 11.99H9.606c-.461 0-.837.346-.837.77 0 .423.376.77.837.77h.415M16.49 16.406h-2.767m0-1.125h2.767M18.54 16.406c.481 0 .873-.358.873-.797 0-.44-.392-.797-.872-.797-.482 0-.873.357-.873.797 0 .439.391.797.873.797ZM11.672 16.406c.482 0 .874-.358.874-.797 0-.44-.392-.797-.874-.797-.48 0-.872.357-.872.797 0 .439.392.797.872.797ZM11.737 17.744v.9c0 .206-.184.374-.409.374h-1.265c-.225 0-.41-.168-.41-.373v-.901h2.084ZM20.558 17.744v.9c0 .206-.184.374-.41.374h-1.264c-.225 0-.41-.168-.41-.373v-.901h2.084ZM9.66 4.025v3.67M11.938 5.061c0 .572-.53 1.036-1.158 1.036-.31 0-1.111.005-1.111.005s-.005-.752-.005-1.04L9.66 4.024h1.12c.626 0 1.156.464 1.156 1.036Z" />
    </G>
  </Svg>
);
export default Parking;
