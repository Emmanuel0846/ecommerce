import { useMemo } from "react";

const ProductMonitoringContainer = ({
  monitoringText,
  inspectionText,
  productImageUrl,
  productIconText,
  propRight,
  propLeft,
  propWidth,
}) => {
  const divStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const bellRossContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute h-[78.13%] w-[23.73%] top-[21.88%] right-[0%] bottom-[0%] left-[76.27%] text-left text-base text-dark font-text-btn-btn-small"
      style={divStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg4.svg"
      />
      <div
        className="absolute w-[62.5%] top-[68%] left-[7.14%] leading-[22px] font-medium inline-block"
        style={bellRossContainerStyle}
      >
        <p className="m-0">{monitoringText}</p>
        <p className="m-0">{inspectionText}</p>
      </div>
      <img
        className="absolute h-3/5 w-full top-[0%] right-[0%] bottom-[40%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg5.svg"
      />
      <img
        className="absolute h-3/5 w-full top-[0%] right-[0%] bottom-[40%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={productImageUrl}
      />
      <div className="absolute top-[90px] left-[202px] rounded-[50%] bg-lavender box-border w-[59px] h-[59px] border-[2px] border-solid border-white" />
      <img
        className="absolute top-[108px] left-[220px] w-6 h-6"
        alt=""
        src={productIconText}
      />
    </div>
  );
};

export default ProductMonitoringContainer;
