import { useMemo } from "react";

const ForminputBasic = ({
  background,
  text,
  forminputBasicWidth,
  forminputBasicPosition,
  forminputBasicTop,
  forminputBasicLeft,
  forminputBasicRight,
  textColor,
}) => {
  const forminputBasicStyle = useMemo(() => {
    return {
      width: forminputBasicWidth,
      position: forminputBasicPosition,
      top: forminputBasicTop,
      left: forminputBasicLeft,
      right: forminputBasicRight,
    };
  }, [
    forminputBasicWidth,
    forminputBasicPosition,
    forminputBasicTop,
    forminputBasicLeft,
    forminputBasicRight,
  ]);

  const text3Style = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className="w-[350px] h-10 text-left text-base text-dark font-text-btn-btn-small"
      style={forminputBasicStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src={background}
      />
      <div className="absolute top-[11px] left-[10px]" style={text3Style}>
        {text}
      </div>
    </div>
  );
};

export default ForminputBasic;
