import { useMemo } from "react";

const BrandlogoColoredIcon = ({
  imageDimensions,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
}) => {
  const brandlogoColoredIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  return (
    <img
      className="absolute h-[29.3%] w-[54.71%] top-[0%] right-[45.65%] bottom-[70.7%] left-[-0.36%] max-w-full overflow-hidden max-h-full"
      alt=""
      src={imageDimensions}
      style={brandlogoColoredIconStyle}
    />
  );
};

export default BrandlogoColoredIcon;
