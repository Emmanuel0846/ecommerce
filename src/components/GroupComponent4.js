import Item3 from "./Item3";

const GroupComponent4 = () => {
  return (
    <div className="absolute top-[827px] left-[70px] w-[1180px] h-[475px] text-left text-base text-base-color-gray-800 font-text-btn-btn-small">
      <div className="absolute top-[0px] left-[0px] rounded-md bg-white box-border w-[1180px] h-[475px] border-[1px] border-solid border-gray-300" />
      <Item3 imageDimensions="/image-32@2x.png" />
      <Item3
        imageDimensions="/image-34@2x.png"
        propLeft="890px"
        propOverflow="unset"
        propHeight="71.11%"
        propWidth="90.22%"
        propTop="14.67%"
        propRight="4.89%"
        propBottom="14.22%"
        propLeft1="4.89%"
      />
      <Item3
        imageDimensions="/image-35@2x.png"
        propLeft="600px"
        propOverflow="unset"
        propHeight="86.67%"
        propWidth="72.44%"
        propTop="6.67%"
        propRight="13.78%"
        propBottom="6.67%"
        propLeft1="13.78%"
      />
      <Item3
        imageDimensions="/image-22@2x.png"
        propLeft="310px"
        propOverflow="hidden"
        propHeight="88%"
        propWidth="92.89%"
        propTop="7.11%"
        propRight="3.56%"
        propBottom="4.89%"
        propLeft1="3.56%"
      />
      <div className="absolute top-[20px] left-[20px] text-xl tracking-[-0.2px] leading-[28px] font-semibold text-dark">
        Saved for later
      </div>
    </div>
  );
};

export default GroupComponent4;
