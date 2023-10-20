import { useMemo } from "react";

const PaymentpaymentPayTypeappl = ({
  paymentpaymentPayTypeapplWidth,
  paymentpaymentPayTypeapplHeight,
  paymentpaymentPayTypeapplPosition,
  paymentpaymentPayTypeapplTop,
  paymentpaymentPayTypeapplRight,
  paymentpaymentPayTypeapplBottom,
  paymentpaymentPayTypeapplLeft,
}) => {
  const paymentpaymentPayTypeapplStyle = useMemo(() => {
    return {
      width: paymentpaymentPayTypeapplWidth,
      height: paymentpaymentPayTypeapplHeight,
      position: paymentpaymentPayTypeapplPosition,
      top: paymentpaymentPayTypeapplTop,
      right: paymentpaymentPayTypeapplRight,
      bottom: paymentpaymentPayTypeapplBottom,
      left: paymentpaymentPayTypeapplLeft,
    };
  }, [
    paymentpaymentPayTypeapplWidth,
    paymentpaymentPayTypeapplHeight,
    paymentpaymentPayTypeapplPosition,
    paymentpaymentPayTypeapplTop,
    paymentpaymentPayTypeapplRight,
    paymentpaymentPayTypeapplBottom,
    paymentpaymentPayTypeapplLeft,
  ]);

  return (
    <div className="w-[34px] h-[22px]" style={paymentpaymentPayTypeapplStyle}>
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-background10.svg"
      />
      <img
        className="absolute h-3/6 w-[79.41%] top-[27.27%] right-[8.82%] bottom-[22.73%] left-[11.76%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-21@2x.png"
      />
    </div>
  );
};

export default PaymentpaymentPayTypeappl;
