import SizesmallContentbtnText from "./SizesmallContentbtnText";

const InquiryFormContainer = () => {
  return (
    <div className="absolute top-[20px] left-[878px] w-[280px] h-[325px] text-left text-base text-gray-500 font-text-btn-btn-small">
      <div className="absolute top-[0px] left-[0px] rounded-md bg-white shadow-[0px_1px_2px_rgba(56,_56,_56,_0.08)] box-border w-[280px] h-[325px] border-[1px] border-solid border-gray-300" />
      <div className="absolute top-[216px] left-[16px] w-[248px] h-10">
        <SizesmallContentbtnText
          text="Send inquiry"
          sizesmallContentbtnTextPosition="absolute"
          sizesmallContentbtnTextTop="0px"
          sizesmallContentbtnTextLeft="0px"
          sizesmallContentbtnTextWidth="248px"
          sizesmallContentbtnTextBackground="linear-gradient(180deg, #127fff, #0067ff)"
          sizesmallContentbtnTextBackgroundColor="unset"
          sizesmallContentbtnTextBorder="unset"
          sizesmallContentbtnTextHeight="40px"
          sizesmallContentbtnTextRight="unset"
          sizesmallContentbtnTextBottom="unset"
          sizesmallContentbtnTextBoxShadow="unset"
          textColor="#fff"
          textFontSize="16px"
        />
      </div>
      <div className="absolute top-[264px] left-[16px] w-[248px] h-10">
        <SizesmallContentbtnText
          text="Seller’s profile"
          sizesmallContentbtnTextPosition="absolute"
          sizesmallContentbtnTextTop="0px"
          sizesmallContentbtnTextLeft="0px"
          sizesmallContentbtnTextWidth="248px"
          sizesmallContentbtnTextBackground="unset"
          sizesmallContentbtnTextBackgroundColor="#fff"
          sizesmallContentbtnTextBorder="1px solid #dee2e7"
          sizesmallContentbtnTextHeight="40px"
          sizesmallContentbtnTextRight="unset"
          sizesmallContentbtnTextBottom="unset"
          sizesmallContentbtnTextBoxShadow="unset"
          textColor="#0d6efd"
          textFontSize="16px"
        />
      </div>
      <div className="absolute top-[164px] left-[17px] w-[183px] h-6">
        <div className="absolute top-[0px] left-[38px] tracking-[-0.2px] leading-[24px]">
          Worldwide shipping
        </div>
        <img
          className="absolute top-[2px] left-[0px] w-5 h-5"
          alt=""
          src="/iconlanguage.svg"
        />
      </div>
      <div className="absolute top-[132px] left-[17px] w-[140px] h-6">
        <div className="absolute top-[0px] left-[38px] tracking-[-0.2px] leading-[24px]">
          Verified Seller
        </div>
        <img
          className="absolute top-[2px] left-[0px] w-5 h-5"
          alt=""
          src="/iconverified-user.svg"
        />
      </div>
      <div className="absolute top-[100px] left-[17px] w-[155px] h-6">
        <div className="absolute top-[0px] left-[38px] tracking-[-0.2px] leading-[24px]">
          Germany, Berlin
        </div>
        <div className="absolute top-[4px] left-[0px] w-[21px] h-[15px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/de2x@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[86.5px] left-[16.5px] box-border w-[248px] h-px border-t-[1px] border-solid border-gainsboro-300" />
      <div className="absolute top-[19px] left-[16px] w-52 h-12 text-dark">
        <div className="absolute top-[0px] left-[0px] w-52 h-12">
          <div className="absolute top-[0px] left-[59px] tracking-[-0.2px] leading-[24px]">
            Supplier
          </div>
          <div className="absolute top-[24px] left-[59px] tracking-[-0.2px] leading-[24px]">
            Guanjoi Trading LLC
          </div>
          <div className="absolute top-[0px] left-[0px] w-12 h-12 text-9xl text-cadetblue">
            <div className="absolute top-[0px] left-[0px] rounded bg-paleturquoise w-12 h-12" />
            <div className="absolute top-[12px] left-[14px] tracking-[-0.2px] leading-[24px] font-semibold">
              R
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryFormContainer;
