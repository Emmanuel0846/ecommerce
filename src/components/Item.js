import { useMemo } from "react";
import Imagecloth6 from "./Imagecloth6";

const Item = ({
  dimensions,
  propLeft,
  propBackgroundColor,
  propOverflow,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft1,
  propMixBlendMode,
}) => {
  const itemStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const imagecloth6Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      overflow: propOverflow,
    };
  }, [propBackgroundColor, propOverflow]);

  const image24IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
      mixBlendMode: propMixBlendMode,
    };
  }, [
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft1,
    propMixBlendMode,
  ]);

  return (
    <div
      className="absolute top-[63px] left-[22px] w-[172px] h-[254px] text-left text-base text-gray-600 font-text-btn-btn-small"
      style={itemStyle}
    >
      <div className="absolute h-[25.98%] w-[82.56%] top-[73.23%] right-[17.44%] bottom-[0.79%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-full top-[0%] left-[0%] inline-block">{`Xiaomi Redmi 8 Original `}</div>
          <div className="absolute top-[71.21%] left-[0%] text-gray-500">
            $32.00-$40.00
          </div>
        </div>
      </div>
      <div className="absolute h-[67.72%] w-full top-[0%] right-[0%] bottom-[32.28%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-whitesmoke-300" />
        <Imagecloth6
          image24="/image-241@2x.png"
          imagecloth6Width="90.12%"
          imagecloth6Height="90.12%"
          imagecloth6Position="absolute"
          imagecloth6Top="4.65%"
          imagecloth6Right="5.81%"
          imagecloth6Bottom="5.23%"
          imagecloth6Left="4.07%"
          imagecloth6MixBlendMode="multiply"
        />
      </div>
    </div>
  );
};

export default Item;
