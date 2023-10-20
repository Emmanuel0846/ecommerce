import { useMemo } from "react";
import Imagetech2 from "./Imagetech2";
import SizenormalContentbtnIcon1 from "./SizenormalContentbtnIcon1";

const Item3 = ({
  imageDimensions,
  propLeft,
  propOverflow,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft1,
}) => {
  const item3Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const imagetech2Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const image32IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft1]);

  return (
    <div
      className="absolute top-[70px] left-[20px] w-[270px] h-[382px] text-left text-base text-base-color-gray-800 font-text-btn-btn-small"
      style={item3Style}
    >
      <div className="absolute top-[0px] left-[0px] w-[270px] h-60">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-300 w-[270px] h-60" />
        <Imagetech2
          image32="/image-32@2x.png"
          imagetech2Position="absolute"
          imagetech2Top="8px"
          imagetech2Left="22px"
          imagetech2MixBlendMode="multiply"
          imagetech2Width="225px"
          imagetech2Height="225px"
          imagetech2Right="unset"
          imagetech2Bottom="unset"
        />
      </div>
      <SizenormalContentbtnIcon1
        icon0="/iconshopping-cart.svg"
        text="Move to cart"
        sizenormalContentbtnIconWidth="57.99%"
        sizenormalContentbtnIconHeight="10.47%"
        sizenormalContentbtnIconPosition="absolute"
        sizenormalContentbtnIconTop="89.53%"
        sizenormalContentbtnIconRight="42.01%"
        sizenormalContentbtnIconBottom="0%"
        sizenormalContentbtnIconLeft="0%"
        sizenormalContentbtnIconBackgroundColor="#fff"
        sizenormalContentbtnIconBorder="1px solid #dee2e7"
        sizenormalContentbtnIconBoxSizing="border-box"
        sizenormalContentbtnIconBackground="unset"
        buttonbasetextMdWidth="calc(100% - 59.58px)"
        buttonbasetextMdRight="16.08px"
        buttonbasetextMdLeft="43.5px"
        textColor="#0d6efd"
      />
      <div className="absolute w-[79.93%] top-[73.82%] left-[0%] tracking-[-0.2px] leading-[24px] inline-block">
        GoPro HERO6 4K Action Camera - Black
      </div>
      <div className="absolute w-[23.42%] top-[65.45%] left-[0%] text-lg font-semibold text-dark inline-block">
        $99.50
      </div>
    </div>
  );
};

export default Item3;
