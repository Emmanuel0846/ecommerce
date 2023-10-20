import { useMemo } from "react";

const ForminputGroupinputMidle = ({
  background,
  text,
  icon0,
  forminputGroupinputMidleWidth,
  forminputGroupinputMidleHeight,
  forminputGroupinputMidlePosition,
  forminputGroupinputMidleTop,
  forminputGroupinputMidleRight,
  forminputGroupinputMidleBottom,
  forminputGroupinputMidleLeft,
  textColor,
}) => {
  const forminputGroupinputMidleStyle = useMemo(() => {
    return {
      width: forminputGroupinputMidleWidth,
      height: forminputGroupinputMidleHeight,
      position: forminputGroupinputMidlePosition,
      top: forminputGroupinputMidleTop,
      right: forminputGroupinputMidleRight,
      bottom: forminputGroupinputMidleBottom,
      left: forminputGroupinputMidleLeft,
    };
  }, [
    forminputGroupinputMidleWidth,
    forminputGroupinputMidleHeight,
    forminputGroupinputMidlePosition,
    forminputGroupinputMidleTop,
    forminputGroupinputMidleRight,
    forminputGroupinputMidleBottom,
    forminputGroupinputMidleLeft,
  ]);

  const text6Style = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className="w-[104px] h-10 text-left text-base text-gray-500 font-text-btn-btn-small"
      style={forminputGroupinputMidleStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={background}
      />
      <div
        className="absolute w-[calc(100%_-_15px)] top-[11px] left-[10px] inline-block"
        style={text6Style}
      >
        {text}
      </div>
      <img
        className="absolute top-[calc(50%_-_12px)] right-[7px] w-6 h-6"
        alt=""
        src={icon0}
      />
    </div>
  );
};

export default ForminputGroupinputMidle;
