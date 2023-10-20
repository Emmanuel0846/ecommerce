import SizenormalGroupmiddleCon from "./SizenormalGroupmiddleCon";
import ForminputGroupinputLeft from "./ForminputGroupinputLeft";

const BlockCoupon = () => {
  return (
    <div className="absolute top-[168px] left-[970px] w-[280px] h-[110px] text-left text-base text-gray-600 font-text-btn-btn-small">
      <img
        className="absolute top-[0px] left-[0px] rounded-md w-[280px] h-[110px]"
        alt=""
        src="/bg9.svg"
      />
      <div className="absolute top-[48px] left-[17px] w-[247px] h-10">
        <SizenormalGroupmiddleCon
          background="/-background29.svg"
          text="Apply"
          sizenormalGroupmiddleConWidth="85px"
          sizenormalGroupmiddleConHeight="40px"
          sizenormalGroupmiddleConPosition="absolute"
          sizenormalGroupmiddleConTop="0px"
          sizenormalGroupmiddleConRight="unset"
          sizenormalGroupmiddleConBottom="unset"
          sizenormalGroupmiddleConLeft="162px"
          textColor="#0d6efd"
        />
        <ForminputGroupinputLeft
          background="/-background30.svg"
          text="Add coupon"
          showIcon0={false}
          forminputGroupinputLeftWidth="164px"
          forminputGroupinputLeftHeight="40px"
          forminputGroupinputLeftPosition="absolute"
          forminputGroupinputLeftTop="0px"
          forminputGroupinputLeftRight="unset"
          forminputGroupinputLeftBottom="unset"
          forminputGroupinputLeftLeft="0px"
        />
      </div>
      <div className="absolute top-[20px] left-[16px]">Have a coupon?</div>
    </div>
  );
};

export default BlockCoupon;
