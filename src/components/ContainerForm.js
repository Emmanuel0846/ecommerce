const ContainerForm = ({ dimensionCode }) => {
  return (
    <div className="absolute top-[142px] left-[0px] w-[1440px] h-16 overflow-hidden text-left text-base text-gray-500 font-text-btn-btn-small">
      <div className="absolute top-[20px] left-[70px] w-[411px] h-6">
        <div className="absolute top-[0px] left-[0px] w-[411px] h-6">
          <div className="absolute top-[0px] left-[0px] tracking-[-0.2px] leading-[24px]">
            Home
          </div>
          <div className="absolute top-[0px] left-[71px] tracking-[-0.2px] leading-[24px]">
            Clothings
          </div>
          <img
            className="absolute top-[2px] left-[45px] w-5 h-5"
            alt=""
            src={dimensionCode}
          />
          <img
            className="absolute top-[2px] left-[145px] w-5 h-5"
            alt=""
            src="/iconcontrolchevron-right.svg"
          />
          <img
            className="absolute top-[2px] left-[259px] w-5 h-5"
            alt=""
            src="/iconcontrolchevron-right.svg"
          />
          <div className="absolute top-[0px] left-[171px] tracking-[-0.2px] leading-[24px]">
            Men’s wear
          </div>
          <div className="absolute top-[0px] left-[286px] tracking-[-0.2px] leading-[24px]">
            Summer clothing
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
