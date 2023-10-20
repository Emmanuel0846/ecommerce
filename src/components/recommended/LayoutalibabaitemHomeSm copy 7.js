import { useMemo } from "react";
import Imagecloth1 from "../Imagecloth1";

const LayoutalibabaitemHomeSm = ({
  priceText,
  productDescription,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propPosition,
  propHeight,
  propWidth,
  propTop1,
  propRight1,
  propBottom1,
  propLeft1,
  propBackgroundColor,
  propOverflow,
  propMargin,
  propPosition1,
  propHeight1,
  propWidth1,
  propTop2,
  propRight2,
  propBottom2,
  propLeft2,
  propMaxWidth,
  propOverflow1,
  propMaxHeight,
  propObjectFit,
}) => {
  const layoutalibabaitemHomeSmStyle = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propTop, propRight, propBottom, propLeft]);

  const imagecloth1Style = useMemo(() => {
    return {
      position: propPosition,
      height: propHeight,
      width: propWidth,
      top: propTop1,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft1,
      backgroundColor: propBackgroundColor,
      overflow: propOverflow,
      margin: propMargin,
    };
  }, [
    propPosition,
    propHeight,
    propWidth,
    propTop1,
    propRight1,
    propBottom1,
    propLeft1,
    propBackgroundColor,
    propOverflow,
    propMargin,
  ]);

  const bitmapIconStyle = useMemo(() => {
    return {
      position: propPosition1,
      height: propHeight1,
      width: propWidth1,
      top: propTop2,
      right: propRight2,
      bottom: propBottom2,
      left: propLeft2,
      maxWidth: propMaxWidth,
      overflow: propOverflow1,
      maxHeight: propMaxHeight,
      objectFit: propObjectFit,
    };
  }, [
    propPosition1,
    propHeight1,
    propWidth1,
    propTop2,
    propRight2,
    propBottom2,
    propLeft2,
    propMaxWidth,
    propOverflow1,
    propMaxHeight,
    propObjectFit,
  ]);

  return (
    <div
      className="absolute h-[48.44%] w-[18.64%] top-[0%] right-[81.36%] bottom-[51.56%] left-[0%] text-left text-base text-dark font-text-btn-btn-small"
      style={layoutalibabaitemHomeSmStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg6.svg"
      />
      <div className="absolute h-[6.85%] w-[29.79%] top-[71.94%] left-[7.27%] leading-[22px] font-medium inline-block">
        {priceText}
      </div>
      <div className="absolute h-[17.1%] w-[84.55%] top-[80.04%] left-[7.28%] tracking-[-0.2px] leading-[24px] text-gray-500 inline-block">
        {productDescription}
      </div>
      <Imagecloth1
        bitmap="/2-1@2x.png"
        imagecloth1Width="90.91%"
        imagecloth1Height="64.52%"
        imagecloth1Position="absolute"
        imagecloth1Top="2.9%"
        imagecloth1Right="4.55%"
        imagecloth1Bottom="32.58%"
        imagecloth1Left="4.55%"
        imagecloth1MixBlendMode="unset"
      />
    </div>
  );
};

export default LayoutalibabaitemHomeSm;
