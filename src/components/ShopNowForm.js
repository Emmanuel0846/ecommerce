import { useMemo } from "react";
import SizesmallContentbtnText from "./SizesmallContentbtnText";

const ShopNowForm = ({ propTop }) => {
  const bannerStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[1814px] left-[70px] w-[1180px] h-[120px] text-left text-base text-white font-text-btn-btn-small"
      style={bannerStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-royalblue w-[1180px] h-[120px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[745px] h-[120px]"
        alt=""
        src="/rectangle-177.svg"
      />
      <SizesmallContentbtnText
        text="Shop now"
        sizesmallContentbtnTextPosition="absolute"
        sizesmallContentbtnTextTop="39px"
        sizesmallContentbtnTextLeft="1027px"
        sizesmallContentbtnTextWidth="unset"
        sizesmallContentbtnTextBackground="unset"
        sizesmallContentbtnTextBackgroundColor="#ff9017"
        sizesmallContentbtnTextBorder="unset"
        sizesmallContentbtnTextHeight="40px"
        sizesmallContentbtnTextRight="unset"
        sizesmallContentbtnTextBottom="unset"
        sizesmallContentbtnTextBoxShadow="unset"
        textColor="#fff"
        textFontSize="16px"
      />
      <div className="absolute top-[63px] left-[30px] opacity-[0.7]">
        Have you ever finally just write dummy info
      </div>
      <div className="absolute top-[28px] left-[30px] text-5xl tracking-[-0.2px] leading-[32px] font-semibold inline-block w-[455px]">
        Super discount on more than 100 USD
      </div>
    </div>
  );
};

export default ShopNowForm;
