import ForminputGroupinputMidle from "./ForminputGroupinputMidle";
import ForminputGroupinputLeft from "./ForminputGroupinputLeft";
import SizenormalGroupmiddleCon from "./SizenormalGroupmiddleCon";
import BrandlogoColoredIcon from "./BrandlogoColoredIcon";

const LayoutheaderAlibaba = ({
  dimension,
  imageDimensions,
  imageDimensionsText,
  showSearchForm,
}) => {
  return (
    <div className="absolute top-[0px] left-[-60px] w-[1440px] h-[86px] text-center text-xs text-gray-500 font-text-btn-btn-small">
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg2.svg"
      />
      <div className="absolute h-[47.67%] w-[15.83%] top-[29.07%] right-[9.17%] bottom-[23.26%] left-[75%]">
        <div className="absolute h-full w-[19.3%] top-[0%] right-[0%] bottom-[0%] left-[80.7%]">
          <img
            className="relative w-[21.01px] h-[21px]"
            alt=""
            src="/vector.svg"
          />
          <div className="absolute top-[63.41%] left-[0%]">My cart</div>
        </div>
        <div className="absolute h-[97.56%] w-[17.11%] top-[2.44%] right-[27.19%] bottom-[0%] left-[55.7%]">
          <img
            className="absolute h-[44.12%] w-[51.3%] top-[0%] right-[23.07%] bottom-[55.88%] left-[25.63%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimension}
          />
          <div className="absolute top-[62.5%] left-[0%]">Orders</div>
        </div>
        <div className="absolute h-[97.56%] w-[22.81%] top-[2.44%] right-[50.88%] bottom-[0%] left-[26.32%]">
          <div className="absolute top-[62.5%] left-[0%]">Message</div>
          <img className="relative w-5 h-5" alt="" src="/vector2.svg" />
        </div>
        <div className="absolute h-full w-[16.23%] top-[0%] right-[83.77%] bottom-[0%] left-[0%]">
          <div className="absolute top-[63.41%] left-[0%]">Profile</div>
          <img className="relative w-5 h-[19px]" alt="" src="/vector3.svg" />
        </div>
      </div>
      {showSearchForm && (
        <div className="absolute h-[46.51%] w-[46.18%] top-[25.58%] right-[31.18%] bottom-[27.91%] left-[22.64%]">
          <div className="absolute h-[105%] w-[100.3%] top-[-2.5%] right-[-0.15%] bottom-[-2.5%] left-[-0.15%] rounded-md bg-gainsboro-500 box-border border-[1px] border-solid border-primary" />
          <ForminputGroupinputMidle
            background="/-background12.svg"
            text="All category"
            icon0="/iconcontrolexpand-more1.svg"
            forminputGroupinputMidleWidth="21.8%"
            forminputGroupinputMidleHeight="100%"
            forminputGroupinputMidlePosition="absolute"
            forminputGroupinputMidleTop="0%"
            forminputGroupinputMidleRight="15.04%"
            forminputGroupinputMidleBottom="0%"
            forminputGroupinputMidleLeft="63.16%"
            textColor="#1c1c1c"
          />
          <ForminputGroupinputLeft
            background="/-background25.svg"
            text="Search"
            showIcon0={false}
            forminputGroupinputLeftWidth="63.31%"
            forminputGroupinputLeftHeight="100%"
            forminputGroupinputLeftPosition="absolute"
            forminputGroupinputLeftTop="0%"
            forminputGroupinputLeftRight="36.69%"
            forminputGroupinputLeftBottom="0%"
            forminputGroupinputLeftLeft="0%"
          />
          <SizenormalGroupmiddleCon
            background="/-background7.svg"
            text="Search"
            sizenormalGroupmiddleConWidth="15.04%"
            sizenormalGroupmiddleConHeight="100%"
            sizenormalGroupmiddleConPosition="absolute"
            sizenormalGroupmiddleConTop="0%"
            sizenormalGroupmiddleConRight="0%"
            sizenormalGroupmiddleConBottom="0%"
            sizenormalGroupmiddleConLeft="84.96%"
            textColor="#fff"
          />
        </div>
      )}
      <BrandlogoColoredIcon
        imageDimensions="/brandlogocolored5.svg"
        propHeight="53.49%"
        propWidth="10.49%"
        propTop="23.26%"
        propRight="80.56%"
        propBottom="23.26%"
        propLeft="8.96%"
      />
    </div>
  );
};

export default LayoutheaderAlibaba;
