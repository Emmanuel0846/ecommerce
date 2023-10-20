import { useMemo } from "react";
import AssetsassetOnOffcheckbox1 from "./AssetsassetOnOffcheckbox1";

const Formchecklabel = ({
  hintText,
  formchecklabelPosition,
  formchecklabelTop,
  formchecklabelLeft,
  formchecklabelWidth,
}) => {
  const formchecklabelStyle = useMemo(() => {
    return {
      position: formchecklabelPosition,
      top: formchecklabelTop,
      left: formchecklabelLeft,
      width: formchecklabelWidth,
    };
  }, [
    formchecklabelPosition,
    formchecklabelTop,
    formchecklabelLeft,
    formchecklabelWidth,
  ]);

  return (
    <div
      className="flex flex-row items-center justify-start py-1.5 pr-4 pl-0 text-left text-base text-dark font-text-btn-btn-small"
      style={formchecklabelStyle}
    >
      <AssetsassetOnOffcheckbox1 assetsassetOnOffcheckboxPosition="relative" />
      <div className="relative">{hintText}</div>
    </div>
  );
};

export default Formchecklabel;
