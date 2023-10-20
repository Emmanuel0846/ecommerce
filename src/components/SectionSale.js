import Item1 from "./items1/Item1";
import Item1a from "./items1/Item1 copy";
import Item1b from "./items1/Item1 copy 2";
import Item1c from "./items1/Item1 copy 3";
import Item1d from "./items1/Item1 copy 4";

const SectionSale = () => {
  return (
    <div className="absolute top-[592px] left-[70px] w-[1180px] h-60 text-center text-base text-dark font-text-btn-btn-small">
      <img
        className="absolute top-[0px] left-[0px] rounded-md w-[1180px] h-60"
        alt=""
        src="/bgcard1.svg"
      />
      <div className="absolute top-[3px] left-[281px] w-[895px] h-[235px]">
        <Item1
          dimension="/image-232@2x.png"
          discountPercentage="-25%"
          productImageUrl="Canon camreras"
          propLeft="716px"
          propOverflow="hidden"
          propHeight="89.33%"
          propWidth="89.33%"
          propTop="5.33%"
          propRight="5.33%"
          propBottom="5.33%"
          propLeft1="5.33%"
          propLeft2="27.36px"
          propWidth1="122px"
          propLeft3="29.64px"
          propLeft4="0%"
        />
        <Item1a
          dimension="/image-292@2x.png"
          discountPercentage="-25%"
          productImageUrl="Headphones"
          propLeft="537px"
          propOverflow="hidden"
          propHeight="91.56%"
          propWidth="80.44%"
          propTop="4.44%"
          propRight="9.78%"
          propBottom="4%"
          propLeft1="9.78%"
          propLeft2="41.36px"
          propWidth1="95px"
          propLeft3="15.64px"
          propLeft4="0%"
        />
        <Item1b
          dimension="/image-283@2x.png"
          discountPercentage="-40%"
          productImageUrl="GoPro cameras"
          propLeft="358px"
          propOverflow="hidden"
          propHeight="65.33%"
          propWidth="500px"
          propTop="17.33%"
          propRight="3.56%"
          propBottom="17.33%"
          propLeft1="4%"
          propLeft2="31.36px"
          propWidth1="114px"
          propLeft3="25.64px"
          propLeft4="0%"
        />
        <Item1c
          dimension="/image-344@2x.png"
          discountPercentage="-15%"
          productImageUrl="Laptops"
          propLeft="179px"
          propOverflow="unset"
          propHeight="71.11%"
          propWidth="90.22%"
          propTop="14.67%"
          propRight="4.89%"
          propBottom="14.22%"
          propLeft1="4.89%"
          propLeft2="57px"
          propWidth1="61.36px"
          propLeft3="0px"
          propLeft4="2.21%"
        />
        <Item1d
          dimension="/image-355@2x.png"
          discountPercentage="-25%"
          productImageUrl="Smart watches"
        />
      </div>
      <div className="absolute top-[20px] left-[20px] w-[198px] h-[113px] text-left text-white">
        <div className="absolute top-[63px] left-[0px] w-[198px] h-[50px] text-center">
          <div className="absolute top-[0px] left-[0px] w-[45px] h-[50px]">
            <div className="absolute top-[0px] left-[0px] rounded bg-base-color-gray-800 w-[45px] h-[50px]" />
            <b className="absolute top-[8px] left-[11px]">04</b>
            <div className="absolute top-[27px] left-[8px] text-xs">Days</div>
          </div>
          <div className="absolute top-[0px] left-[51px] w-[45px] h-[50px]">
            <div className="absolute top-[0px] left-[0px] rounded bg-base-color-gray-800 w-[45px] h-[50px]" />
            <b className="absolute top-[8px] left-[13px]">13</b>
            <div className="absolute top-[27px] left-[8px] text-xs">Hour</div>
          </div>
          <div className="absolute top-[0px] left-[102px] w-[45px] h-[50px]">
            <div className="absolute top-[0px] left-[0px] rounded bg-base-color-gray-800 w-[45px] h-[50px]" />
            <b className="absolute top-[8px] left-[11px]">34</b>
            <div className="absolute top-[27px] left-[12px] text-xs">Min</div>
          </div>
          <div className="absolute top-[0px] left-[153px] w-[45px] h-[50px]">
            <div className="absolute top-[0px] left-[0px] rounded bg-base-color-gray-800 w-[45px] h-[50px]" />
            <b className="absolute top-[8px] left-[12px]">56</b>
            <div className="absolute top-[27px] left-[11px] text-xs">Sec</div>
          </div>
        </div>
        <div className="absolute top-[26px] left-[0px] text-gray-500">
          Hygiene equipments
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.2px] leading-[28px] font-semibold text-dark">
          Deals and offers
        </div>
      </div>
    </div>
  );
};

export default SectionSale;
