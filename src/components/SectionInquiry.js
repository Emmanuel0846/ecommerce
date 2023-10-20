import SizesmallContentbtnText from "./SizesmallContentbtnText";
import Formtextarea from "./Formtextarea";
import ForminputBasic from "./ForminputBasic";
import Formselectbox from "./Formselectbox";

const SectionInquiry = () => {
  return (
    <div className="absolute top-[1406px] left-[70px] w-[1180px] h-[420px] text-left text-base text-white font-text-btn-btn-small">
      <img
        className="absolute top-[0px] left-[0px] w-[1180px] h-[420px] object-cover"
        alt=""
        src="/group-982@2x.png"
      />
      <div className="absolute top-[40px] left-[40px] w-[440px] h-[139px]">
        <div className="absolute top-[91px] left-[0px] tracking-[-0.2px] leading-[24px] inline-block w-[390px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </div>
        <div className="absolute top-[0px] left-[0px] text-13xl tracking-[-0.2px] font-semibold inline-block w-[440px]">
          An easy way to send requests to all suppliers
        </div>
      </div>
      <div className="absolute top-[30px] left-[620px] w-[491px] h-[346px] text-xl text-dark">
        <img
          className="absolute top-[-1px] left-[-2px] rounded-md w-[495px] h-[350px]"
          alt=""
          src="/bgcard3.svg"
        />
        <SizesmallContentbtnText
          text="Send inquiry"
          sizesmallContentbtnTextPosition="absolute"
          sizesmallContentbtnTextTop="81.21%"
          sizesmallContentbtnTextLeft="4.18%"
          sizesmallContentbtnTextWidth="26.07%"
          sizesmallContentbtnTextBackground="linear-gradient(180deg, #127fff, #0067ff)"
          sizesmallContentbtnTextBackgroundColor="unset"
          sizesmallContentbtnTextBorder="unset"
          sizesmallContentbtnTextHeight="11.56%"
          sizesmallContentbtnTextRight="69.76%"
          sizesmallContentbtnTextBottom="7.23%"
          sizesmallContentbtnTextBoxShadow="unset"
          textColor="#fff"
          textFontSize="16px"
        />
        <Formtextarea
          background="/-background21.svg"
          text="Type more details"
          formtextareaWidth="440px"
          formtextareaHeight="73px"
          formtextareaPosition="absolute"
          formtextareaTop="128px"
          formtextareaLeft="20px"
        />
        <div className="absolute top-[22px] left-[20px] tracking-[-0.2px] leading-[28px] font-semibold inline-block w-[332px]">
          Send quote to suppliers
        </div>
        <ForminputBasic
          background="/-background22.svg"
          text="What item you need?"
          forminputBasicWidth="440px"
          forminputBasicPosition="absolute"
          forminputBasicTop="68px"
          forminputBasicLeft="20px"
          forminputBasicRight="unset"
          textColor="#1c1c1c"
        />
        <ForminputBasic
          background="/-background23.svg"
          text="Quantity"
          forminputBasicWidth="206px"
          forminputBasicPosition="absolute"
          forminputBasicTop="221px"
          forminputBasicLeft="20px"
          forminputBasicRight="unset"
          textColor="#1c1c1c"
        />
        <Formselectbox
          background="/-background24.svg"
          text="Pcs"
          iconcontrolexpandMore="/iconcontrolexpand-more3.svg"
          formselectboxWidth="111px"
          formselectboxPosition="absolute"
          formselectboxTop="221px"
          formselectboxLeft="234px"
          formselectboxHeight="40px"
          formselectboxRight="unset"
          formselectboxBottom="unset"
          formselectboxBoxShadow="unset"
        />
      </div>
    </div>
  );
};

export default SectionInquiry;
