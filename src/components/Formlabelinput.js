import { useMemo } from "react";
import ForminputBasic from "./ForminputBasic";

const Formlabelinput = ({
  label,
  background,
  text,
  formlabelinputWidth,
  formlabelinputPosition,
  formlabelinputTop,
  formlabelinputLeft,
}) => {
  const formlabelinputStyle = useMemo(() => {
    return {
      width: formlabelinputWidth,
      position: formlabelinputPosition,
      top: formlabelinputTop,
      left: formlabelinputLeft,
    };
  }, [
    formlabelinputWidth,
    formlabelinputPosition,
    formlabelinputTop,
    formlabelinputLeft,
  ]);

  return (
    <div
      className="w-[351px] h-16 text-left text-base text-dark font-text-btn-btn-small"
      style={formlabelinputStyle}
    >
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-6">
        <div className="absolute w-full top-[0px] left-[0px] inline-block">
          {label}
        </div>
      </div>
      <ForminputBasic
        background="/-background4.svg"
        text="Type here"
        forminputBasicWidth="100%"
        forminputBasicPosition="absolute"
        forminputBasicTop="24px"
        forminputBasicLeft="0px"
        forminputBasicRight="0px"
        textColor="#bdc4cd"
      />
    </div>
  );
};

export default Formlabelinput;
