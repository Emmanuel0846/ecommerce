import { useMemo } from "react";

const Formiconinput = ({
  background,
  icon0,
  icon01,
  text,
  showIcon0,
  formiconinputWidth,
  formiconinputHeight,
  formiconinputPosition,
  formiconinputTop,
  formiconinputRight,
  formiconinputBottom,
  formiconinputLeft,
}) => {
  const formiconinputStyle = useMemo(() => {
    return {
      width: formiconinputWidth,
      height: formiconinputHeight,
      position: formiconinputPosition,
      top: formiconinputTop,
      right: formiconinputRight,
      bottom: formiconinputBottom,
      left: formiconinputLeft,
    };
  }, [
    formiconinputWidth,
    formiconinputHeight,
    formiconinputPosition,
    formiconinputTop,
    formiconinputRight,
    formiconinputBottom,
    formiconinputLeft,
  ]);

  return (
    <div
      className="w-[350px] h-10 text-left text-base text-gray-500 font-text-btn-btn-small"
      style={formiconinputStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src={background}
      />
      {showIcon0 && (
        <img
          className="absolute top-[calc(50%_-_11px)] right-[9px] w-[22px] h-[22px]"
          alt=""
          src={icon0}
        />
      )}
      <img
        className="absolute top-[calc(50%_-_11px)] left-[8px] w-[22px] h-[22px]"
        alt=""
        src={icon01}
      />
      <div className="absolute w-[calc(100%_-_104px)] top-[11px] left-[36px] inline-block">
        {text}
      </div>
    </div>
  );
};

export default Formiconinput;
