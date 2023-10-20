import { useMemo } from "react";

const Formbasetag = ({ brandName, productCode, propLeft }) => {
  const formbasetagStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[0px] left-[0px] rounded-8xs bg-white flex flex-row items-center justify-start py-1.5 pr-1.5 pl-2.5 gap-[9px] text-left text-base text-gray-600 font-text-btn-btn-small border-[1px] border-solid border-primary"
      style={formbasetagStyle}
    >
      <div className="relative">{brandName}</div>
      <img className="relative w-5 h-5" alt="" src={productCode} />
    </div>
  );
};

export default Formbasetag;
