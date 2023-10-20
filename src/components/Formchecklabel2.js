import { useMemo } from "react";

const Formchecklabel2 = ({ itemDimensions, itemDescription, propTop }) => {
  const formchecklabel2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[108px] left-[0px] flex flex-row items-center justify-start py-1.5 pr-4 pl-0 text-left text-base text-dark font-text-btn-btn-small"
      style={formchecklabel2Style}
    >
      <img className="relative w-[34px] h-6" alt="" src={itemDimensions} />
      <div className="relative">{itemDescription}</div>
    </div>
  );
};

export default Formchecklabel2;
