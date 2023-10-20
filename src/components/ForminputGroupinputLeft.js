import { useMemo } from "react";

const ForminputGroupinputLeft = ({
  background,
  text,
  showIcon0,
  forminputGroupinputLeftWidth,
  forminputGroupinputLeftHeight,
  forminputGroupinputLeftPosition,
  forminputGroupinputLeftTop,
  forminputGroupinputLeftRight,
  forminputGroupinputLeftBottom,
  forminputGroupinputLeftLeft,
}) => {
  const forminputGroupinputLeftStyle = useMemo(() => {
    return {
      width: forminputGroupinputLeftWidth,
      height: forminputGroupinputLeftHeight,
      position: forminputGroupinputLeftPosition,
      top: forminputGroupinputLeftTop,
      right: forminputGroupinputLeftRight,
      bottom: forminputGroupinputLeftBottom,
      left: forminputGroupinputLeftLeft,
    };
  }, [
    forminputGroupinputLeftWidth,
    forminputGroupinputLeftHeight,
    forminputGroupinputLeftPosition,
    forminputGroupinputLeftTop,
    forminputGroupinputLeftRight,
    forminputGroupinputLeftBottom,
    forminputGroupinputLeftLeft,
  ]);

  return (
    <div
      className="w-[109px] h-10 text-left text-base text-gray-500 font-text-btn-btn-small"
      style={forminputGroupinputLeftStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={background}
      />
      {showIcon0 && (
        <img
          className="absolute top-[calc(50%_-_12px)] right-[7px] w-6 h-6"
          alt=""
          src="/icon02.svg"
        />
      )}
      <div className="absolute w-[calc(100%_-_15px)] top-[11px] left-[10px] inline-block">
        {text}
      </div>
    </div>
  );
};

export default ForminputGroupinputLeft;
