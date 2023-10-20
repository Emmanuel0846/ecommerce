import { useMemo } from "react";

const Navbasetabtextnorm = ({
  text,
  navbasetabtextnormWidth,
  navbasetabtextnormHeight,
  navbasetabtextnormPosition,
  navbasetabtextnormTop,
  navbasetabtextnormRight,
  navbasetabtextnormBottom,
  navbasetabtextnormLeft,
  textLeft,
}) => {
  const navbasetabtextnormStyle = useMemo(() => {
    return {
      width: navbasetabtextnormWidth,
      height: navbasetabtextnormHeight,
      position: navbasetabtextnormPosition,
      top: navbasetabtextnormTop,
      right: navbasetabtextnormRight,
      bottom: navbasetabtextnormBottom,
      left: navbasetabtextnormLeft,
    };
  }, [
    navbasetabtextnormWidth,
    navbasetabtextnormHeight,
    navbasetabtextnormPosition,
    navbasetabtextnormTop,
    navbasetabtextnormRight,
    navbasetabtextnormBottom,
    navbasetabtextnormLeft,
  ]);

  const text1Style = useMemo(() => {
    return {
      left: textLeft,
    };
  }, [textLeft]);

  return (
    <div
      className="box-border w-20 h-12 text-center text-base text-gray-500 font-text-btn-btn-small border-b-[1px] border-solid border-gray-300"
      style={navbasetabtextnormStyle}
    >
      <div
        className="absolute top-[calc(50%_-_8px)] left-[26px] font-medium"
        style={text1Style}
      >
        {text}
      </div>
    </div>
  );
};

export default Navbasetabtextnorm;
