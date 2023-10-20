import Cart from "../components/Cart";
import AsidaSummary from "../components/AsidaSummary";
import LayoutheaderAlibaba from "../components/LayoutheaderAlibaba";
import LayoutfooterAlibaba from "../components/LayoutfooterAlibaba";
import GroupComponent4 from "../components/GroupComponent4";
import ShopNowForm from "../components/ShopNowForm";
import BlockCoupon from "../components/BlockCoupon";

const WebCart = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[1807px] overflow-hidden text-left text-base text-base-color-gray-400 font-text-btn-btn-small">
      <Cart />
      <AsidaSummary />
      <LayoutheaderAlibaba
        dimension="/vector1.svg"
        imageDimensions="/-background13.svg"
        imageDimensionsText="/brandlogocolored.svg"
        showSearchForm={false}
      />
      <LayoutfooterAlibaba
        imageDimensions="/brandlogocolored8.svg"
        imageDimensionsText="/iconcontrolexpand-less4.svg"
        imageDimensionsText2="/subtract4.svg"
        imageDimensionsCode="/logo4.svg"
        colTop="1483px"
      />
      <GroupComponent4 />
      <ShopNowForm propTop="1322px" />
      <div className="absolute top-[113px] left-[70px] text-5xl tracking-[-0.2px] leading-[32px] font-semibold text-dark">
        My cart (3)
      </div>
      <div className="absolute top-[749px] left-[130px] w-[242px] h-12">
        <div className="absolute top-[1px] left-[58px] w-[184px] h-[46px]">
          <div className="absolute top-[22px] left-[0px] tracking-[-0.2px] leading-[24px]">{`Have you ever finally just `}</div>
          <div className="absolute top-[0px] left-[0px] tracking-[-0.2px] leading-[24px] text-dark inline-block w-[184px]">
            Secure payment
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-12 h-12"
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className="absolute top-[749px] left-[376px] w-[246px] h-12">
        <div className="absolute top-[22px] left-[58px] tracking-[-0.2px] leading-[24px]">{`Have you ever finally just `}</div>
        <div className="absolute top-[0px] left-[58px] tracking-[-0.2px] leading-[24px] text-dark inline-block w-[188px]">
          Customer support
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-12 h-12"
          alt=""
          src="/icon1.svg"
        />
      </div>
      <div className="absolute top-[749px] left-[676px] w-[242px] h-12">
        <div className="absolute top-[0px] left-[58px] w-[184px] h-[46px]">
          <div className="absolute top-[22px] left-[0px] tracking-[-0.2px] leading-[24px]">
            Have you ever finally just
          </div>
          <div className="absolute top-[0px] left-[0px] tracking-[-0.2px] leading-[24px] text-dark inline-block w-[175px]">
            Free delivery
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-12 h-12"
          alt=""
          src="/icon2.svg"
        />
      </div>
      <BlockCoupon />
    </div>
  );
};

export default WebCart;
