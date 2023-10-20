import Formselectbox from "./Formselectbox";
import Formchecklabel1 from "./Formchecklabel1";

const ContentTop1 = () => {
  return (
    <div className="absolute top-[207px] left-[340px] w-[920px] h-[62px] text-left text-base text-dark font-text-btn-btn-small">
      <div className="absolute top-[0px] left-[0px] rounded-md bg-white box-border w-[920px] h-[62px] border-[1px] border-solid border-gray-300" />
      <Formselectbox
        background="/-background14.svg"
        text="Featured"
        iconcontrolexpandMore="/iconcontrolexpand-more.svg"
        formselectboxWidth="172px"
        formselectboxPosition="absolute"
        formselectboxTop="11px"
        formselectboxLeft="652px"
        formselectboxHeight="40px"
        formselectboxRight="unset"
        formselectboxBottom="unset"
        formselectboxBoxShadow="unset"
      />
      <div className="absolute top-[22px] left-[19px]">
        <span>{`12,911 items in `}</span>
        <span className="font-semibold">Mobile accessory</span>
      </div>
      <Formchecklabel1
        filterOptions="Verified only"
        propTop="14px"
        propLeft="507px"
        propWidth="unset"
      />
      <img
        className="absolute top-[11px] left-[834px] w-[76px] h-10"
        alt=""
        src="/btngroup1.svg"
      />
    </div>
  );
};

export default ContentTop1;
