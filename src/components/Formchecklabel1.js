import { useMemo } from "react";
import AssetsassetOnOffcheckbox from "./AssetsassetOnOffcheckbox";

const Formchecklabel1 = ({ filterOptions, propTop, propLeft, propWidth }) => {
  const formchecklabel1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propTop, propLeft, propWidth]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[103.55px] flex flex-row items-center justify-start py-1.5 pr-4 pl-0 box-border text-left text-base text-dark font-text-btn-btn-small"
      style={formchecklabel1Style}
    >
      <AssetsassetOnOffcheckbox assetsassetOnOffcheckboxPosition="relative" />
      <div className="relative">{filterOptions}</div>
    </div>
  );
};

export default Formchecklabel1;
