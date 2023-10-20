import { useMemo } from "react";

const ButtonbasetextMd = ({
  text,
  buttonbasetextMdAlignItems,
  buttonbasetextMdJustifyContent,
  buttonbasetextMdPosition,
  buttonbasetextMdWidth,
  buttonbasetextMdTop,
  buttonbasetextMdRight,
  buttonbasetextMdLeft,
  textColor,
  textTextAlign,
}) => {
  const buttonbasetextMd1Style = useMemo(() => {
    return {
      alignItems: buttonbasetextMdAlignItems,
      justifyContent: buttonbasetextMdJustifyContent,
      position: buttonbasetextMdPosition,
      width: buttonbasetextMdWidth,
      top: buttonbasetextMdTop,
      right: buttonbasetextMdRight,
      left: buttonbasetextMdLeft,
    };
  }, [
    buttonbasetextMdAlignItems,
    buttonbasetextMdJustifyContent,
    buttonbasetextMdPosition,
    buttonbasetextMdWidth,
    buttonbasetextMdTop,
    buttonbasetextMdRight,
    buttonbasetextMdLeft,
  ]);

  const text4Style = useMemo(() => {
    return {
      color: textColor,
      textAlign: textTextAlign,
    };
  }, [textColor, textTextAlign]);

  return (
    <div
      className="flex flex-row items-start justify-start text-left text-base text-primary font-text-btn-btn-small"
      style={buttonbasetextMd1Style}
    >
      <div className="relative font-medium" style={text4Style}>
        {text}
      </div>
    </div>
  );
};

export default ButtonbasetextMd;
