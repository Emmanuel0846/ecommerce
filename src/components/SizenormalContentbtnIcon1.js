import { useMemo } from "react";

const SizenormalContentbtnIcon1 = ({
  icon0,
  text,
  sizenormalContentbtnIconWidth,
  sizenormalContentbtnIconHeight,
  sizenormalContentbtnIconPosition,
  sizenormalContentbtnIconTop,
  sizenormalContentbtnIconRight,
  sizenormalContentbtnIconBottom,
  sizenormalContentbtnIconLeft,
  sizenormalContentbtnIconBackgroundColor,
  sizenormalContentbtnIconBorder,
  sizenormalContentbtnIconBoxSizing,
  sizenormalContentbtnIconBackground,
  buttonbasetextMdWidth,
  buttonbasetextMdRight,
  buttonbasetextMdLeft,
  textColor,
}) => {
  const sizenormalContentbtnIconStyle = useMemo(() => {
    return {
      width: sizenormalContentbtnIconWidth,
      height: sizenormalContentbtnIconHeight,
      position: sizenormalContentbtnIconPosition,
      top: sizenormalContentbtnIconTop,
      right: sizenormalContentbtnIconRight,
      bottom: sizenormalContentbtnIconBottom,
      left: sizenormalContentbtnIconLeft,
      backgroundColor: sizenormalContentbtnIconBackgroundColor,
      border: sizenormalContentbtnIconBorder,
      boxSizing: sizenormalContentbtnIconBoxSizing,
      background: sizenormalContentbtnIconBackground,
    };
  }, [
    sizenormalContentbtnIconWidth,
    sizenormalContentbtnIconHeight,
    sizenormalContentbtnIconPosition,
    sizenormalContentbtnIconTop,
    sizenormalContentbtnIconRight,
    sizenormalContentbtnIconBottom,
    sizenormalContentbtnIconLeft,
    sizenormalContentbtnIconBackgroundColor,
    sizenormalContentbtnIconBorder,
    sizenormalContentbtnIconBoxSizing,
    sizenormalContentbtnIconBackground,
  ]);

  const buttonbasetextMdStyle = useMemo(() => {
    return {
      width: buttonbasetextMdWidth,
      right: buttonbasetextMdRight,
      left: buttonbasetextMdLeft,
    };
  }, [buttonbasetextMdWidth, buttonbasetextMdRight, buttonbasetextMdLeft]);

  const text5Style = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className="rounded-md bg-white box-border w-[120px] h-10 text-left text-base text-primary font-text-btn-btn-small border-[1px] border-solid border-gray-300"
      style={sizenormalContentbtnIconStyle}
    >
      <img
        className="absolute top-[9px] left-[9px] w-[22px] h-[22px]"
        alt=""
        src={icon0}
      />
      <div
        className="absolute w-[calc(100%_-_69px)] top-[calc(50%_-_9px)] right-[21px] left-[48px] flex flex-row items-start justify-start"
        style={buttonbasetextMdStyle}
      >
        <div className="relative text-[12px] font-medium" style={text5Style}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default SizenormalContentbtnIcon1;
