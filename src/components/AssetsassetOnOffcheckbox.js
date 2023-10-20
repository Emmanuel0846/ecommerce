import { useMemo } from "react";

const AssetsassetOnOffcheckbox = ({ assetsassetOnOffcheckboxPosition }) => {
  const assetsassetOnOffcheckboxStyle = useMemo(() => {
    return {
      position: assetsassetOnOffcheckboxPosition,
    };
  }, [assetsassetOnOffcheckboxPosition]);

  return (
    <div className="w-[34px] h-6" style={assetsassetOnOffcheckboxStyle}>
      <div className="absolute top-[2px] left-[1px] w-5 h-5">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-primary w-5 h-5" />
        <img
          className="absolute top-[6px] left-[4px] w-[13px] h-[9px]"
          alt=""
          src="/path.svg"
        />
      </div>
    </div>
  );
};

export default AssetsassetOnOffcheckbox;
