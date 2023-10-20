import { useMemo } from "react";

const Formselectbox = ({
  background,
  text,
  iconcontrolexpandMore,
  formselectboxWidth,
  formselectboxPosition,
  formselectboxTop,
  formselectboxLeft,
  formselectboxHeight,
  formselectboxRight,
  formselectboxBottom,
  formselectboxBoxShadow,
}) => {
  const formselectboxStyle = useMemo(() => {
    return {
      width: formselectboxWidth,
      position: formselectboxPosition,
      top: formselectboxTop,
      left: formselectboxLeft,
      height: formselectboxHeight,
      right: formselectboxRight,
      bottom: formselectboxBottom,
      boxShadow: formselectboxBoxShadow,
    };
  }, [
    formselectboxWidth,
    formselectboxPosition,
    formselectboxTop,
    formselectboxLeft,
    formselectboxHeight,
    formselectboxRight,
    formselectboxBottom,
    formselectboxBoxShadow,
  ]);

  return (
    <div
      className="w-[314px] h-10 text-left text-base text-dark font-text-btn-btn-small"
      style={formselectboxStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src={background}
      />
      <div className="absolute top-[11px] left-[10px]">{text}</div>
      <img
        className="absolute top-[calc(50%_-_12px)] right-[8px] w-6 h-6"
        alt=""
        src={iconcontrolexpandMore}
      />
    </div>
  );
};

export default Formselectbox;
