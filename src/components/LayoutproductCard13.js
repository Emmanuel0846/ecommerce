import { useMemo } from "react";
import RatingRatingStarsstars3 from "./RatingRatingStarsstars3";
import Imagetech1 from "./Imagetech1";

const LayoutproductCard13 = ({
  dimension,
  carDimensions,
  carSizeCode,
  showText,
  propLeft,
  propTop,
  propWidth,
  propRight,
  propWidth1,
  propRight1,
  propLeft1,
  propOverflow,
  propWidth2,
  propTop1,
  propRight2,
  propBottom,
  propLeft2,
  propHeight,
  propHeight1,
  propWidth3,
  propRight3,
  propBottom1,
  propTop2,
  propLeft3,
}) => {
  const layoutproductCard13Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const ratingStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const ratingRatingStarsstars3IconStyle = useMemo(() => {
    return {
      width: propWidth1,
      right: propRight1,
    };
  }, [propWidth1, propRight1]);

  const bellRossStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const imagetech1Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const image33IconStyle = useMemo(() => {
    return {
      width: propWidth2,
      top: propTop1,
      right: propRight2,
      bottom: propBottom,
      left: propLeft2,
      height: propHeight,
    };
  }, [propWidth2, propTop1, propRight2, propBottom, propLeft2, propHeight]);

  const groupDivStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth3,
      right: propRight3,
      bottom: propBottom1,
    };
  }, [propHeight1, propWidth3, propRight3, propBottom1]);

  const text7Style = useMemo(() => {
    return {
      top: propTop2,
      left: propLeft3,
    };
  }, [propTop2, propLeft3]);

  return (
    <div
      className="absolute top-[340px] left-[334px] w-[295px] h-[405px] text-left text-base text-orange font-text-btn-btn-small"
      style={layoutproductCard13Style}
    >
      <img
        className="absolute h-[100.25%] w-[100.34%] top-[-0.12%] right-[-0.17%] bottom-[-0.12%] left-[-0.17%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg3.svg"
      />
      <div
        className="absolute h-[4.69%] w-[36.61%] top-[76.54%] right-[56.61%] bottom-[18.77%] left-[6.78%]"
        style={ratingStyle}
      >
        <RatingRatingStarsstars3
          ratingRatingStarsstars3Ra="/ratingrating-starsstars4.svg"
          ratingRatingStarsstars3IcWidth="74.07%"
          ratingRatingStarsstars3IcHeight="78.95%"
          ratingRatingStarsstars3IcPosition="absolute"
          ratingRatingStarsstars3IcTop="5.26%"
          ratingRatingStarsstars3IcRight="25.93%"
          ratingRatingStarsstars3IcBottom="15.79%"
          ratingRatingStarsstars3IcLeft="0%"
          ratingRatingStarsstars3IcMaxWidth="100%"
          ratingRatingStarsstars3IcOverflow="hidden"
          ratingRatingStarsstars3IcMaxHeight="100%"
        />
        <div className="absolute top-[0%] left-[79.63%]" style={bellRossStyle}>
          {carDimensions}
        </div>
      </div>
      <img
        className="absolute h-[10.86%] w-[14.92%] top-[68.89%] right-[6.1%] bottom-[20.25%] left-[78.98%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src="/buttonbtnbasic.svg"
      />
      <div className="absolute h-[0.25%] w-[100.34%] top-[64.32%] right-[-0.17%] bottom-[35.43%] left-[-0.17%] box-border border-t-[1px] border-solid border-gray-200" />
      <Imagetech1
        image33="/image-331@2x.png"
        imagetech1Width="77.97%"
        imagetech1Height="56.79%"
        imagetech1Position="absolute"
        imagetech1Top="3.7%"
        imagetech1Right="10.85%"
        imagetech1Bottom="39.51%"
        imagetech1Left="11.19%"
      />
      <div className="absolute w-[72.88%] top-[83.7%] left-[6.78%] tracking-[-0.2px] leading-[24px] text-base-color-gray-800 inline-block">
        GoPro HERO6 4K Action Camera - Black
      </div>
      <div
        className="absolute h-[5.68%] w-[47.46%] top-[68.64%] right-[45.76%] bottom-[25.68%] left-[6.78%] text-lg text-dark"
        style={groupDivStyle}
      >
        <div className="absolute top-[0%] left-[0%] font-semibold">$99.50</div>
        {showText && (
          <div
            className="absolute top-[17.39%] left-[50.71%] text-base [text-decoration:line-through] text-gray-500"
            style={text7Style}
          >
            $1128.00
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutproductCard13;
