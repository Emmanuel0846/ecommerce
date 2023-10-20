import { useMemo } from "react";

const LayoutnavItem = ({ categoryName, propTop, propWidth, propColor }) => {
  const layoutnavItemStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const text10Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[48px] left-[0px] w-60 h-9 text-left text-base text-gray-600 font-text-btn-btn-small"
      style={layoutnavItemStyle}
    >
      <div
        className="absolute w-[calc(100%_-_11px)] top-[calc(50%_-_9px)] left-[0px] inline-block"
        style={text10Style}
      >
        {categoryName}
      </div>
    </div>
  );
};

export default LayoutnavItem;
