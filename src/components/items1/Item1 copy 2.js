import { useMemo } from "react";
import Imagetech8 from "../Imagetech8";
import Badgeorange from "../Badgeorange";

const Item1 = ({
  dimension,
  discountPercentage,
  productImageUrl,
  propLeft,
  propOverflow,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft1,
  propLeft2,
  propWidth1,
  propLeft3,
  propLeft4,
}) => {
  const item2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const imagetech8Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const image35IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft1]);

  const infoStyle = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth1,
    };
  }, [propLeft2, propWidth1]);

  const badgeorangeStyle = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const smartWatchesStyle = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[179px] h-[235px] text-center text-base text-dark font-text-btn-btn-small"
      style={item2Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
      <Imagetech8
        image35="/image-28@2x.png"
        imagetech8Width="140px"
        imagetech8Height="140px"
        imagetech8Position="absolute"
        imagetech8Top="8px"
        imagetech8Left="20px"
        imagetech8Right="unset"
        imagetech8Bottom="unset"
        imagetech8MixBlendMode="unset"
      />
      <div
        className="absolute top-[159px] left-[32.36px] w-28 h-[59px]"
        style={infoStyle}
      >
        <Badgeorange
          pending="-25%"
          badgeorangeBackgroundColor="#ffe3e3"
          badgeorangePosition="absolute"
          badgeorangeTop="31px"
          badgeorangeLeft="24.64px"
          pendingColor="#eb001b"
        />
        <div
          className="absolute top-[0%] left-[0%] tracking-[-0.2px] leading-[24px]"
          style={smartWatchesStyle}
        >
          {productImageUrl}
        </div>
      </div>
      <div className="absolute h-[100.43%] w-[0.56%] top-[-0.21%] right-[99.72%] bottom-[-0.21%] left-[-0.28%] box-border border-r-[1px] border-solid border-gainsboro-300" />
    </div>
  );
};

export default Item1;
