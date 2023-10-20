const Component4 = ({ carModelCarStyle, carColorCode }) => {
  return (
    <div className="self-stretch relative h-9 text-left text-base text-gray-600 font-text-btn-btn-small">
      <div className="absolute h-full w-[35.98%] top-[0%] right-[64.02%] bottom-[0%] left-[0%] bg-gray-200" />
      <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
      <div className="absolute top-[calc(50%_-_8px)] left-[10px]">
        {carModelCarStyle}
      </div>
      <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.98%] bg-white" />
      <div className="absolute h-[102.78%] w-[0.18%] top-[-1.39%] right-[63.93%] bottom-[-1.39%] left-[35.89%] box-border border-r-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px]">
        {carColorCode}
      </div>
      <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
    </div>
  );
};

export default Component4;
