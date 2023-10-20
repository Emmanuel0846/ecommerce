import { useMemo } from "react";

const ShippingContainer = ({
  featureDescription,
  productImageDimensions,
  shippingDescription,
  propRight,
  propLeft,
}) => {
  const div1Style = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div
      className="absolute h-[78.13%] w-[23.73%] top-[21.88%] right-[25.42%] bottom-[0%] left-[50.85%] text-left text-base text-dark font-text-btn-btn-small"
      style={div1Style}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg4.svg"
      />
      <div className="absolute w-[62.5%] top-[68%] left-[7.14%] leading-[22px] font-medium inline-block">
        {featureDescription}
      </div>
      <img
        className="absolute h-3/5 w-full top-[0%] right-[0%] bottom-[40%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg5.svg"
      />
      <img
        className="absolute h-3/5 w-full top-[0%] right-[0%] bottom-[40%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={productImageDimensions}
      />
      <div className="absolute top-[90px] left-[202px] rounded-[50%] bg-lavender box-border w-[59px] h-[59px] border-[2px] border-solid border-white" />
      <img
        className="absolute top-[108px] left-[220px] w-6 h-6"
        alt=""
        src={shippingDescription}
      />
    </div>
  );
};

export default ShippingContainer;
