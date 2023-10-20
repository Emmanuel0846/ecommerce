import { useMemo } from "react";

const Navbasepillstextactive = ({
  background,
  text,
  navbasepillstextactiveWidth,
  navbasepillstextactivePosition,
  navbasepillstextactiveTop,
  navbasepillstextactiveLeft,
}) => {
  const navbasepillstextactiveStyle = useMemo(() => {
    return {
      width: navbasepillstextactiveWidth,
      position: navbasepillstextactivePosition,
      top: navbasepillstextactiveTop,
      left: navbasepillstextactiveLeft,
    };
  }, [
    navbasepillstextactiveWidth,
    navbasepillstextactivePosition,
    navbasepillstextactiveTop,
    navbasepillstextactiveLeft,
  ]);

  return (
    <div
      className="w-[164px] h-10 overflow-hidden text-left text-base text-dark font-text-btn-btn-small"
      style={navbasepillstextactiveStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src={background}
      />
      <div className="absolute w-[calc(100%_-_20px)] top-[calc(50%_-_9px)] left-[10px] font-medium inline-block">
        {text}
      </div>
    </div>
  );
};

export default Navbasepillstextactive;
