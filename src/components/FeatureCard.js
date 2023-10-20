import Component4 from "./Component4";

const FeatureCard = () => {
  return (
    <div className="absolute top-[806px] left-[70px] w-[880px] h-[618px] text-left text-base text-gray-600 font-text-btn-btn-small">
      <img
        className="absolute top-[-2.5px] left-[-3.5px] rounded-md w-[887px] h-[625px]"
        alt=""
        src="/bg.svg"
      />
      <div className="absolute top-[463px] left-[19px] w-[325px] h-[126px]">
        <div className="absolute top-[0px] left-[0px] w-[325px] h-[126px]">
          <div className="absolute top-[0px] left-[0px] w-[252px] h-6">
            <div className="absolute top-[0px] left-[27px] tracking-[-0.2px] leading-[24px]">
              Some great feature name here
            </div>
            <img
              className="absolute top-[2px] left-[0px] w-5 h-5"
              alt=""
              src="/iconcontrolcheck.svg"
            />
          </div>
          <div className="absolute top-[68px] left-[0px] w-[298px] h-6">
            <div className="absolute top-[0px] left-[27px] tracking-[-0.2px] leading-[24px]">
              Duis aute irure dolor in reprehenderit
            </div>
            <img
              className="absolute top-[2px] left-[0px] w-5 h-5"
              alt=""
              src="/iconcontrolcheck.svg"
            />
          </div>
          <div className="absolute top-[34px] left-[0px] w-[325px] h-6">
            <div className="absolute top-[0px] left-[27px] tracking-[-0.2px] leading-[24px]">{`Lorem ipsum dolor sit amet, consectetur `}</div>
            <img
              className="absolute top-[2px] left-[0px] w-5 h-5"
              alt=""
              src="/iconcontrolcheck.svg"
            />
          </div>
          <div className="absolute top-[102px] left-[0px] w-[252px] h-6">
            <div className="absolute top-[0px] left-[27px] tracking-[-0.2px] leading-[24px]">
              Some great feature name here
            </div>
            <img
              className="absolute top-[2px] left-[0px] w-5 h-5"
              alt=""
              src="/iconcontrolcheck.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[257px] left-[19px] box-border w-[567px] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-gainsboro-100">
        <Component4 carModelCarStyle="Model" carColorCode="#8786867" />
        <Component4 carModelCarStyle="Style" carColorCode="Classic style" />
        <Component4
          carModelCarStyle="Certificate"
          carColorCode="ISO-898921212"
        />
        <Component4
          carModelCarStyle="Size"
          carColorCode="34mm x 450mm x 19mm"
        />
        <Component4 carModelCarStyle="Memory" carColorCode="36GB RAM" />
      </div>
      <div className="absolute top-[66px] left-[20px] tracking-[-0.2px] leading-[24px] whitespace-pre-wrap inline-block w-[798px]">
        <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</p>
        <p className="m-0">{`Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
