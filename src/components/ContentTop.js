import Formselectbox from "./Formselectbox";
import Formchecklabel from "./Formchecklabel";

const ContentTop = () => {
  return (
    <div className="absolute top-[206px] left-[334px] w-[926px] h-[62px] text-left text-base text-dark font-text-btn-btn-small">
      <div className="absolute top-[0px] left-[0px] rounded-md bg-white box-border w-[926px] h-[62px] border-[1px] border-solid border-gray-300" />
      <Formselectbox
        background="/-background14.svg"
        text="Featured"
        iconcontrolexpandMore="/iconcontrolexpand-more.svg"
        formselectboxWidth="172px"
        formselectboxPosition="absolute"
        formselectboxTop="11px"
        formselectboxLeft="658px"
        formselectboxHeight="40px"
        formselectboxRight="unset"
        formselectboxBottom="unset"
        formselectboxBoxShadow="unset"
      />
      <div className="absolute top-[23px] left-[20px]">
        <span>{`12,911 items in `}</span>
        <span className="font-semibold">Mobile accessory</span>
      </div>
      <Formchecklabel
        hintText="Verified only"
        formchecklabelPosition="absolute"
        formchecklabelTop="14px"
        formchecklabelLeft="513px"
        formchecklabelWidth="unset"
      />
      <img
        className="absolute top-[11px] left-[840px] w-[76px] h-10"
        alt=""
        src="/btngroup.svg"
      />
    </div>
  );
};

export default ContentTop;
