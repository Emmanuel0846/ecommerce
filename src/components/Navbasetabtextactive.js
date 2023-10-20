import { useMemo } from "react";

const Navbasetabtextactive = ({
  text,
  navbasetabtextactiveWidth,
  navbasetabtextactiveHeight,
  navbasetabtextactivePosition,
  navbasetabtextactiveTop,
  navbasetabtextactiveRight,
  navbasetabtextactiveBottom,
  navbasetabtextactiveLeft,
  textLeft,
}) => {
  const navbasetabtextactiveStyle = useMemo(() => {
    return {
      width: navbasetabtextactiveWidth,
      height: navbasetabtextactiveHeight,
      position: navbasetabtextactivePosition,
      top: navbasetabtextactiveTop,
      right: navbasetabtextactiveRight,
      bottom: navbasetabtextactiveBottom,
      left: navbasetabtextactiveLeft,
    };
  }, [
    navbasetabtextactiveWidth,
    navbasetabtextactiveHeight,
    navbasetabtextactivePosition,
    navbasetabtextactiveTop,
    navbasetabtextactiveRight,
    navbasetabtextactiveBottom,
    navbasetabtextactiveLeft,
  ]);

  const textStyle = useMemo(() => {
    return {
      left: textLeft,
    };
  }, [textLeft]);

  return (
    <div
      className="box-border w-20 h-12 text-center text-base text-primary font-text-btn-btn-small border-b-[2px] border-solid border-primary"
      style={navbasetabtextactiveStyle}
    >
      <div
        className="absolute top-[calc(50%_-_8px)] left-[26px] font-medium"
        style={textStyle}
      >
        {text}
      </div>
    </div>
  );
};

export default Navbasetabtextactive;
