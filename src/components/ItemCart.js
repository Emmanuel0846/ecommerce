import { useMemo } from "react";
import Formselectbox from "./Formselectbox";
import SizesmallContentbtnText from "./SizesmallContentbtnText";
import Imagecloth1 from "./Imagecloth1";

const ItemCart = ({
  productDimensions,
  quantityText,
  sellerName,
  priceText,
  itemDimensions,
  textTop,
  propLeft,
  propHeight,
  propWidth,
  propRight,
  propBottom,
  propLeft1,
  propTop,
}) => {
  const itemCartStyle = useMemo(() => {
    return {
      top: textTop,
    };
  }, [textTop]);

  const numberStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const bitmapIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
      top: propTop,
    };
  }, [propHeight, propWidth, propRight, propBottom, propLeft1, propTop]);

  return (
    <div
      className="absolute top-[23px] left-[20px] box-border w-[840px] h-[136px] text-left text-base text-dark font-text-btn-btn-small border-b-[1px] border-solid border-gray-300"
      style={itemCartStyle}
    >
      <Formselectbox
        background="/-background27.svg"
        text="Qty: 9"
        iconcontrolexpandMore="/iconcontrolexpand-more.svg"
        formselectboxWidth="14.64%"
        formselectboxPosition="absolute"
        formselectboxTop="29.41%"
        formselectboxLeft="85.36%"
        formselectboxHeight="29.41%"
        formselectboxRight="0%"
        formselectboxBottom="41.18%"
        formselectboxBoxShadow="0px 1px 2px rgba(56, 56, 56, 0.08)"
      />
      <SizesmallContentbtnText
        text="Remove"
        sizesmallContentbtnTextPosition="absolute"
        sizesmallContentbtnTextTop="63.24%"
        sizesmallContentbtnTextLeft="10.83%"
        sizesmallContentbtnTextWidth="8.33%"
        sizesmallContentbtnTextBackground="unset"
        sizesmallContentbtnTextBackgroundColor="#fff"
        sizesmallContentbtnTextBorder="1px solid #dee2e7"
        sizesmallContentbtnTextHeight="22.06%"
        sizesmallContentbtnTextRight="80.83%"
        sizesmallContentbtnTextBottom="14.71%"
        sizesmallContentbtnTextBoxShadow="0px 1px 2px rgba(56, 56, 56, 0.08)"
        textColor="#fa3434"
        textFontSize="13px"
      />
      <SizesmallContentbtnText
        text="Save for later"
        sizesmallContentbtnTextPosition="absolute"
        sizesmallContentbtnTextTop="63.24%"
        sizesmallContentbtnTextLeft="20.18%"
        sizesmallContentbtnTextWidth="12.26%"
        sizesmallContentbtnTextBackground="unset"
        sizesmallContentbtnTextBackgroundColor="#fff"
        sizesmallContentbtnTextBorder="1px solid #dee2e7"
        sizesmallContentbtnTextHeight="22.06%"
        sizesmallContentbtnTextRight="67.56%"
        sizesmallContentbtnTextBottom="14.71%"
        sizesmallContentbtnTextBoxShadow="0px 1px 2px rgba(56, 56, 56, 0.08)"
        textColor="#0d6efd"
        textFontSize="13px"
      />
      <div className="absolute w-[55%] top-[0%] left-[10.71%] leading-[22px] font-medium inline-block">
        T-shirts with multiple colors, for men and lady
      </div>
      <div className="absolute w-[51.07%] top-[20.59%] left-[10.71%] tracking-[-0.2px] leading-[24px] text-gray-500 whitespace-pre-wrap inline-block">
        <p className="m-0">Size: medium, Color: blue, Material: Plastic</p>
        <p className="m-0">{sellerName}</p>
      </div>
      <div
        className="absolute top-[4.41%] left-[93.57%] leading-[22px] font-medium text-right"
        style={numberStyle}
      >
        {priceText}
      </div>
      <div className="absolute h-[58.82%] w-[9.52%] top-[0%] right-[90.48%] bottom-[41.18%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-whitesmoke-200 box-border border-[1px] border-solid border-gainsboro-300" />
        <Imagecloth1
          bitmap="/bitmap2@2x.png"
          imagecloth1Width="87.5%"
          imagecloth1Height="87.5%"
          imagecloth1Position="absolute"
          imagecloth1Top="6.25%"
          imagecloth1Right="6.25%"
          imagecloth1Bottom="6.25%"
          imagecloth1Left="6.25%"
          imagecloth1MixBlendMode="multiply"
        />
      </div>
    </div>
  );
};

export default ItemCart;
