import PaymentpaymentPayTypeappl from "./PaymentpaymentPayTypeappl";
import SizesmallContentbtnText from "./SizesmallContentbtnText";

const AsidaSummary = () => {
  return (
    <div className="absolute top-[290px] left-[970px] w-[280px] h-[302px] text-left text-base text-gray-600 font-text-btn-btn-small">
      <img
        className="absolute top-[-6px] left-[-10px] rounded-md w-[300px] h-[322px]"
        alt=""
        src="/bg8.svg"
      />
      <img
        className="absolute h-[7.28%] w-[12.14%] top-[85.76%] right-[75%] bottom-[6.95%] left-[12.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/paymentpayment-paytypeamex.svg"
      />
      <img
        className="absolute h-[7.28%] w-[12.14%] top-[85.76%] right-[60%] bottom-[6.95%] left-[27.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/miscpayment.svg"
      />
      <img
        className="absolute h-[7.28%] w-[12.14%] top-[85.76%] right-[45%] bottom-[6.95%] left-[42.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/miscpayment1.svg"
      />
      <img
        className="absolute h-[7.28%] w-[12.14%] top-[85.76%] right-[30%] bottom-[6.95%] left-[57.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/miscpayment2.svg"
      />
      <PaymentpaymentPayTypeappl
        paymentpaymentPayTypeapplWidth="12.14%"
        paymentpaymentPayTypeapplHeight="7.28%"
        paymentpaymentPayTypeapplPosition="absolute"
        paymentpaymentPayTypeapplTop="85.76%"
        paymentpaymentPayTypeapplRight="15%"
        paymentpaymentPayTypeapplBottom="6.95%"
        paymentpaymentPayTypeapplLeft="72.86%"
      />
      <SizesmallContentbtnText
        text="Checkout"
        sizesmallContentbtnTextPosition="absolute"
        sizesmallContentbtnTextTop="187px"
        sizesmallContentbtnTextLeft="16px"
        sizesmallContentbtnTextWidth="248px"
        sizesmallContentbtnTextBackground="unset"
        sizesmallContentbtnTextBackgroundColor="#00b517"
        sizesmallContentbtnTextBorder="unset"
        sizesmallContentbtnTextHeight="54px"
        sizesmallContentbtnTextRight="unset"
        sizesmallContentbtnTextBottom="unset"
        sizesmallContentbtnTextBoxShadow="unset"
        textColor="#fff"
        textFontSize="18px"
      />
      <div className="absolute w-[87.14%] top-[calc(50%_-_14px)] right-[5.71%] left-[7.14%] h-7 text-dark">
        <div className="absolute top-[calc(50%_-_8px)] left-[0%] font-semibold">
          Total:
        </div>
        <div className="absolute top-[calc(50%_-_14px)] left-[64.34%] text-xl tracking-[-0.2px] leading-[28px] font-semibold text-right">
          $1357.97
        </div>
      </div>
      <div className="absolute w-[87.14%] top-[calc(50%_-_131px)] right-[5.71%] left-[7.14%] h-6">
        <div className="absolute top-[calc(50%_-_12px)] left-[0%] tracking-[-0.2px] leading-[24px]">
          Subtotal:
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[71.31%] tracking-[-0.2px] leading-[24px] text-right">
          $1403.97
        </div>
      </div>
      <div className="absolute w-[87.14%] top-[calc(50%_-_102px)] right-[5.71%] left-[7.14%] h-6">
        <div className="absolute top-[calc(50%_-_12px)] left-[0%] tracking-[-0.2px] leading-[24px]">
          Discount:
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[73.36%] tracking-[-0.2px] leading-[24px] text-tomato text-right">
          - $60.00
        </div>
      </div>
      <div className="absolute w-[87.14%] top-[calc(50%_-_73px)] right-[5.71%] left-[7.14%] h-6">
        <div className="absolute top-[calc(50%_-_12px)] left-[0%] tracking-[-0.2px] leading-[24px]">
          Tax:
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[72.95%] tracking-[-0.2px] leading-[24px] text-base-color-green text-right">
          + $14.00
        </div>
      </div>
      <div className="absolute h-[0.33%] w-[87.14%] top-[39.4%] right-[6.07%] bottom-[60.26%] left-[6.79%] bg-gainsboro-200" />
    </div>
  );
};

export default AsidaSummary;
