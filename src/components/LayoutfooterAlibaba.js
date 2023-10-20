import { useMemo } from "react";
import BrandlogoColoredIcon from "./BrandlogoColoredIcon";
import TypeGooglePlay from "./TypeGooglePlay";

const LayoutfooterAlibaba = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsCode,
  colTop,
}) => {
  const layoutfooterAlibabaStyle = useMemo(() => {
    return {
      top: colTop,
    };
  }, [colTop]);

  return (
    <div
      className="absolute top-[3242px] left-[-60px] bg-white w-[1440px] h-[324px] text-left text-base text-gray-500 font-text-btn-btn-small"
      style={layoutfooterAlibabaStyle}
    >
      <div className="absolute h-[42.28%] w-[5.42%] top-[12.35%] right-[27.64%] bottom-[45.37%] left-[64.94%]">
        <div className="absolute top-[0%] left-[0%] leading-[22px] font-medium text-dark">
          For users
        </div>
        <div className="absolute top-[23.36%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Login
        </div>
        <div className="absolute top-[43.07%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Register
        </div>
        <div className="absolute top-[62.77%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Settings
        </div>
        <div className="absolute top-[82.48%] left-[0%] tracking-[-0.2px] leading-[24px]">
          My Orders
        </div>
      </div>
      <div className="absolute h-[48.46%] w-[19.17%] top-[12.35%] right-[71.88%] bottom-[39.2%] left-[8.96%] text-gray-600">
        <BrandlogoColoredIcon
          imageDimensions="/brandlogocolored4.svg"
          propHeight="29.3%"
          propWidth="54.71%"
          propTop="0%"
          propRight="45.65%"
          propBottom="70.7%"
          propLeft="-0.36%"
        />
        <div className="absolute w-full top-[38.85%] left-[0%] tracking-[-0.2px] leading-[24px] inline-block">
          Best information about the company gies here but now lorem ipsum is
        </div>
        <img
          className="absolute h-[20.38%] w-[72.46%] top-[79.62%] right-[27.54%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-987.svg"
        />
      </div>
      <div className="absolute h-[20.99%] w-full top-[79.01%] right-[0%] bottom-[0%] left-[0%] text-right text-base-color-gray-800">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200 box-border border-t-[1px] border-solid border-gray-300" />
        <div className="absolute h-[35.29%] w-[81.67%] top-[33.82%] right-[9.44%] bottom-[30.88%] left-[8.89%]">
          <div className="absolute h-full w-[9.1%] top-[0%] right-[0%] bottom-[0%] left-[90.9%]">
            <div className="absolute h-[70.83%] w-[22.43%] top-[12.5%] right-[77.57%] bottom-[16.67%] left-[0%]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[-300%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/us2x@2x.png"
              />
            </div>
            <div className="absolute top-[0%] left-[-35.04%] tracking-[-0.2px] leading-[24px]">
              English
            </div>
            <img
              className="absolute h-full w-[22.43%] top-[0%] right-[0%] bottom-[0%] left-[20.57%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={imageDimensionsText}
            />
          </div>
          <div className="absolute w-[27.21%] top-[0%] left-[0%] tracking-[-0.2px] leading-[24px] text-left inline-block">{`© 2023 Ecommerce. `}</div>
        </div>
      </div>
      <div className="absolute h-[39.81%] w-[8.61%] top-[12.35%] right-[12.99%] bottom-[47.84%] left-[74.4%] text-dark">
        <TypeGooglePlay
          logo="/subtract2.svg"
          typeGooglePlayWidth="100%"
          typeGooglePlayHeight="32.56%"
          typeGooglePlayPosition="absolute"
          typeGooglePlayTop="28.68%"
          typeGooglePlayRight="0%"
          typeGooglePlayBottom="38.76%"
          typeGooglePlayLeft="0%"
          logoIconHeight="60.34%"
          logoIconWidth="82.18%"
          logoIconRight="9%"
          logoIconBottom="18.97%"
        />
        <TypeGooglePlay
          logo="/logo2.svg"
          typeGooglePlayWidth="100%"
          typeGooglePlayHeight="32.56%"
          typeGooglePlayPosition="absolute"
          typeGooglePlayTop="67.44%"
          typeGooglePlayRight="0%"
          typeGooglePlayBottom="0%"
          typeGooglePlayLeft="0%"
          logoIconHeight="58.62%"
          logoIconWidth="82.77%"
          logoIconRight="8.41%"
          logoIconBottom="20.69%"
        />
        <div className="absolute top-[0%] left-[0.81%] leading-[22px] font-medium">
          Get app
        </div>
      </div>
      <div className="absolute h-[42.28%] w-[7.5%] top-[12.35%] right-[39.38%] bottom-[45.37%] left-[53.13%]">
        <div className="absolute top-[0%] left-[0%] leading-[22px] font-medium text-dark">
          Information
        </div>
        <div className="absolute top-[23.36%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Help Center
        </div>
        <div className="absolute top-[43.07%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Money Refund
        </div>
        <div className="absolute top-[62.77%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Shipping
        </div>
        <div className="absolute top-[82.48%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Contact us
        </div>
      </div>
      <div className="absolute h-[42.28%] w-[6.25%] top-[12.35%] right-[51.32%] bottom-[45.37%] left-[42.43%]">
        <div className="absolute top-[0%] left-[0%] leading-[22px] font-medium text-dark">
          Partnership
        </div>
        <div className="absolute top-[23.36%] left-[0%] tracking-[-0.2px] leading-[24px]">
          About Us
        </div>
        <div className="absolute top-[43.07%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Find store
        </div>
        <div className="absolute top-[62.77%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Categories
        </div>
        <div className="absolute top-[82.48%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Blogs
        </div>
      </div>
      <div className="absolute h-[42.28%] w-[5.63%] top-[12.35%] right-[62.01%] bottom-[45.37%] left-[32.36%]">
        <div className="absolute top-[0%] left-[0%] leading-[22px] font-medium text-dark">
          About
        </div>
        <div className="absolute top-[23.36%] left-[0%] tracking-[-0.2px] leading-[24px]">
          About Us
        </div>
        <div className="absolute top-[43.07%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Find store
        </div>
        <div className="absolute top-[62.77%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Categories
        </div>
        <div className="absolute top-[82.48%] left-[0%] tracking-[-0.2px] leading-[24px]">
          Blogs
        </div>
      </div>
    </div>
  );
};

export default LayoutfooterAlibaba;
