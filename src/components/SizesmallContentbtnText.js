import { useMemo } from "react";

const SizesmallContentbtnText = ({
  text,
  sizesmallContentbtnTextPosition,
  sizesmallContentbtnTextTop,
  sizesmallContentbtnTextLeft,
  sizesmallContentbtnTextWidth,
  sizesmallContentbtnTextBackground,
  sizesmallContentbtnTextBackgroundColor,
  sizesmallContentbtnTextBorder,
  sizesmallContentbtnTextHeight,
  sizesmallContentbtnTextRight,
  sizesmallContentbtnTextBottom,
  sizesmallContentbtnTextBoxShadow,
  textColor,
  textFontSize,
}) => {
  const sizesmallContentbtnTextStyle = useMemo(() => {
    return {
      position: sizesmallContentbtnTextPosition,
      top: sizesmallContentbtnTextTop,
      left: sizesmallContentbtnTextLeft,
      width: sizesmallContentbtnTextWidth,
      background: sizesmallContentbtnTextBackground,
      backgroundColor: sizesmallContentbtnTextBackgroundColor,
      border: sizesmallContentbtnTextBorder,
      height: sizesmallContentbtnTextHeight,
      right: sizesmallContentbtnTextRight,
      bottom: sizesmallContentbtnTextBottom,
      boxShadow: sizesmallContentbtnTextBoxShadow,
    };
  }, [
    sizesmallContentbtnTextPosition,
    sizesmallContentbtnTextTop,
    sizesmallContentbtnTextLeft,
    sizesmallContentbtnTextWidth,
    sizesmallContentbtnTextBackground,
    sizesmallContentbtnTextBackgroundColor,
    sizesmallContentbtnTextBorder,
    sizesmallContentbtnTextHeight,
    sizesmallContentbtnTextRight,
    sizesmallContentbtnTextBottom,
    sizesmallContentbtnTextBoxShadow,
  ]);

  const text2Style = useMemo(() => {
    return {
      color: textColor,
      fontSize: textFontSize,
    };
  }, [textColor, textFontSize]);

  return (
    <div
      className="rounded-md [background:linear-gradient(180deg,_#127fff,_#0067ff)] h-[30px] flex flex-col items-center justify-center py-0 px-2.5 box-border text-center text-smi text-white font-text-btn-btn-small"
      style={sizesmallContentbtnTextStyle}
    >
      <div className="flex flex-row items-start justify-start">
        <div className="relative font-medium" style={text2Style}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default SizesmallContentbtnText;
