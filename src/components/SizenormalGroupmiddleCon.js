import { useMemo } from "react";
import ButtonbasetextMd from "./ButtonbasetextMd";

const SizenormalGroupmiddleCon = ({
  background,
  text,
  sizenormalGroupmiddleConWidth,
  sizenormalGroupmiddleConHeight,
  sizenormalGroupmiddleConPosition,
  sizenormalGroupmiddleConTop,
  sizenormalGroupmiddleConRight,
  sizenormalGroupmiddleConBottom,
  sizenormalGroupmiddleConLeft,
  textColor,
}) => {
  const sizenormalGroupmiddleConStyle = useMemo(() => {
    return {
      width: sizenormalGroupmiddleConWidth,
      height: sizenormalGroupmiddleConHeight,
      position: sizenormalGroupmiddleConPosition,
      top: sizenormalGroupmiddleConTop,
      right: sizenormalGroupmiddleConRight,
      bottom: sizenormalGroupmiddleConBottom,
      left: sizenormalGroupmiddleConLeft,
    };
  }, [
    sizenormalGroupmiddleConWidth,
    sizenormalGroupmiddleConHeight,
    sizenormalGroupmiddleConPosition,
    sizenormalGroupmiddleConTop,
    sizenormalGroupmiddleConRight,
    sizenormalGroupmiddleConBottom,
    sizenormalGroupmiddleConLeft,
  ]);

  const text4Style = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div className="w-[100px] h-10" style={sizenormalGroupmiddleConStyle}>
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={background}
      />
      <ButtonbasetextMd
        text="1"
        buttonbasetextMdAlignItems="center"
        buttonbasetextMdJustifyContent="center"
        buttonbasetextMdPosition="absolute"
        buttonbasetextMdWidth="calc(100% - 20px)"
        buttonbasetextMdTop="calc(50% - 9px)"
        buttonbasetextMdRight="10px"
        buttonbasetextMdLeft="10px"
        textColor="#0d6efd"
        textTextAlign="center"
      />
    </div>
  );
};

export default SizenormalGroupmiddleCon;
