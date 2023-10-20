import { useMemo } from "react";

const AssetsassetOnOffcheckbox1 = ({ assetsassetOnOffcheckboxPosition }) => {
  const assetsassetOnOffcheckbox1Style = useMemo(() => {
    return {
      position: assetsassetOnOffcheckboxPosition,
    };
  }, [assetsassetOnOffcheckboxPosition]);

  return (
    <div className="w-[34px] h-6" style={assetsassetOnOffcheckbox1Style}>
      <div className="absolute top-[2px] left-[1px] rounded-8xs box-border w-5 h-5 border-[2px] border-solid border-silver" />
    </div>
  );
};

export default AssetsassetOnOffcheckbox1;
