import { useMemo } from "react";

const Navbasepillstextnorm = ({
  text,
  navbasepillstextnormWidth,
  navbasepillstextnormPosition,
  navbasepillstextnormTop,
  navbasepillstextnormLeft,
}) => {
  const navbasepillstextnormStyle = useMemo(() => {
    return {
      width: navbasepillstextnormWidth,
      position: navbasepillstextnormPosition,
      top: navbasepillstextnormTop,
      left: navbasepillstextnormLeft,
    };
  }, [
    navbasepillstextnormWidth,
    navbasepillstextnormPosition,
    navbasepillstextnormTop,
    navbasepillstextnormLeft,
  ]);

  return (
    <div
      className="w-[164px] h-10 overflow-hidden text-left text-base text-gray-600 font-text-btn-btn-small"
      style={navbasepillstextnormStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full opacity-[0.1]"
        alt=""
        src="/-background2.svg"
      />
      <div className="absolute w-[calc(100%_-_20px)] top-[calc(50%_-_9px)] left-[10px] inline-block">
        {text}
      </div>
    </div>
  );
};

export default Navbasepillstextnorm;
