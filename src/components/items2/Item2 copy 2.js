import { useMemo } from "react";
import Imagetech8 from "../Imagetech8";

const Item2b = ({
  dimension,
  productDescription,
  price,
  propTop,
  propLeft,
  propOverflow,
  propBackgroundColor,
  propHeight,
  propWidth,
  propTop1,
  propRight,
  propBottom,
  propLeft1,
  propMixBlendMode,
}) => {
  const item1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const imagetech8Style = useMemo(() => {
    return {
      overflow: propOverflow,
      backgroundColor: propBackgroundColor,
    };
  }, [propOverflow, propBackgroundColor]);

  const image35IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop1,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
      mixBlendMode: propMixBlendMode,
    };
  }, [
    propHeight,
    propWidth,
    propTop1,
    propRight,
    propBottom,
    propLeft1,
    propMixBlendMode,
  ]);

  return (
    <div
      className="absolute top-[3px] left-[280px] w-[223px] h-[127px] text-left text-base text-dark font-text-btn-btn-small"
      style={item1Style}
    >
      <div className="absolute h-full w-[100.39%] top-[0%] right-[-0.39%] bottom-[0%] left-[0%] bg-white" />
      <Imagetech8
        image35="/image-34@2x.png"
        imagetech8Width="36.77%"
        imagetech8Height="64.57%"
        imagetech8Position="absolute"
        imagetech8Top="33.07%"
        imagetech8Left="62.78%"
        imagetech8Right="0.45%"
        imagetech8Bottom="2.36%"
        imagetech8MixBlendMode="unset"
      />
      <div className="absolute w-[61.88%] top-[15.75%] left-[7.17%] inline-block">
        {productDescription}
      </div>
      <div className="absolute w-[43.93%] top-[37.8%] left-[7.17%] text-smi text-gray-500 inline-block">
        <p className="m-0">{`From `}</p>
        <p className="m-0">{price}</p>
      </div>
      <div className="absolute h-[100.79%] w-[0.45%] top-[-0.39%] right-[99.78%] bottom-[-0.39%] left-[-0.22%] box-border border-r-[1px] border-solid border-gainsboro-300" />
      <div className="absolute h-[0.79%] w-[99.98%] top-[98.82%] right-[-0.22%] bottom-[0.39%] left-[0.24%] box-border border-t-[1px] border-solid border-gainsboro-300" />
    </div>
  );
};

export default Item2b;
