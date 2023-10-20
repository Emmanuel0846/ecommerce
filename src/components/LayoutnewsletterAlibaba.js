import { useMemo } from "react";
import Formiconinput from "./Formiconinput";
import SizesmallContentbtnText from "./SizesmallContentbtnText";

const LayoutnewsletterAlibaba = ({
  dimensionCode,
  imageDimensionCode,
  imageDimensionCode2,
  propTop,
}) => {
  const layoutnewsletterAlibabaStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[3052px] left-[-70px] w-[1440px] h-[190px] text-center text-base text-base-color-gray-800 font-text-btn-btn-small"
      style={layoutnewsletterAlibabaStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
      <div className="absolute h-[59.47%] w-[42.85%] top-[20%] right-[28.54%] bottom-[20.53%] left-[28.61%]">
        <div className="absolute h-[35.4%] w-[63.53%] top-[64.6%] right-[18.15%] bottom-[0%] left-[18.31%]">
          <Formiconinput
            background="/-background19.svg"
            icon0="/icon05.svg"
            icon01="/iconemail1.svg"
            text="Email"
            showIcon0={false}
            formiconinputWidth="69.9%"
            formiconinputHeight="100%"
            formiconinputPosition="absolute"
            formiconinputTop="0%"
            formiconinputRight="30.1%"
            formiconinputBottom="0%"
            formiconinputLeft="0%"
          />
          <SizesmallContentbtnText
            text="Subscribe"
            sizesmallContentbtnTextPosition="absolute"
            sizesmallContentbtnTextTop="0%"
            sizesmallContentbtnTextLeft="71.94%"
            sizesmallContentbtnTextWidth="28.06%"
            sizesmallContentbtnTextBackground="linear-gradient(180deg, #127fff, #0067ff)"
            sizesmallContentbtnTextBackgroundColor="unset"
            sizesmallContentbtnTextBorder="unset"
            sizesmallContentbtnTextHeight="100%"
            sizesmallContentbtnTextRight="0%"
            sizesmallContentbtnTextBottom="0%"
            sizesmallContentbtnTextBoxShadow="unset"
            textColor="#fff"
            textFontSize="16px"
          />
        </div>
        <div className="absolute h-[46.02%] w-full top-[0%] right-[0%] bottom-[53.98%] left-[0%]">
          <div className="absolute w-full top-[53.85%] left-[0%] tracking-[-0.2px] leading-[24px] inline-block">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </div>
          <div className="absolute top-[0%] left-[28.2%] text-xl tracking-[-0.2px] leading-[28px] font-semibold text-dark">
            Subscribe on our newsletter
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutnewsletterAlibaba;
