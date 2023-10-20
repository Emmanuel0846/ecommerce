import AsideItems from "../components/AsideItems";
import FeatureCard from "../components/FeatureCard";
import InquiryFormContainer from "../components/InquiryFormContainer";
import WarrantyForm from "../components/WarrantyForm";
import FormGalleryImages from "../components/FormGalleryImages";
import BlockRecommend from "../components/BlockRecommend";
import LayoutnavbarAlibaba from "../components/LayoutnavbarAlibaba";
import LayoutheaderAlibaba from "../components/LayoutheaderAlibaba";
import Navbasetabtextnorm from "../components/Navbasetabtextnorm";
import Navbasetabtextactive from "../components/Navbasetabtextactive";
import LayoutfooterAlibaba from "../components/LayoutfooterAlibaba";
import ShopNowForm from "../components/ShopNowForm";

const WebDetail = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[2346px] overflow-hidden text-left text-base text-primary font-text-btn-btn-small">
      <AsideItems />
      <FeatureCard />
      <div className="absolute top-[206px] left-[70px] w-[1180px] h-[580px]">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-white box-border w-[1180px] h-[580px] border-[1px] border-solid border-gray-300" />
        <div className="absolute top-[368px] left-[951px] w-[133px] h-6">
          <div className="absolute top-[0px] left-[32px] tracking-[-0.1px] leading-[24px] font-medium">
            Save for later
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6"
            alt=""
            src="/iconcontrolfavorite-border.svg"
          />
        </div>
        <InquiryFormContainer />
        <WarrantyForm />
        <div className="absolute top-[420px] left-[19px] w-[381.15px] h-14">
          <FormGalleryImages />
        </div>
      </div>
      <BlockRecommend />
      <div className="absolute top-[142px] left-[-60px] w-[1440px] h-16 overflow-hidden text-gray-500">
        <div className="absolute top-[20px] left-[133px] w-[411px] h-6">
          <div className="absolute top-[0px] left-[0px] tracking-[-0.2px] leading-[24px]">
            Home
          </div>
          <div className="absolute top-[0px] left-[71px] tracking-[-0.2px] leading-[24px]">
            Clothings
          </div>
          <img
            className="absolute top-[2px] left-[45px] w-5 h-5"
            alt=""
            src="/iconcontrolchevron-right.svg"
          />
          <img
            className="absolute top-[2px] left-[145px] w-5 h-5"
            alt=""
            src="/iconcontrolchevron-right.svg"
          />
          <img
            className="absolute top-[2px] left-[259px] w-5 h-5"
            alt=""
            src="/iconcontrolchevron-right.svg"
          />
          <div className="absolute top-[0px] left-[171px] tracking-[-0.2px] leading-[24px]">
            Men’s wear
          </div>
          <div className="absolute top-[0px] left-[286px] tracking-[-0.2px] leading-[24px]">
            Summer clothing
          </div>
        </div>
      </div>
      <LayoutnavbarAlibaba />
      <LayoutheaderAlibaba
        dimension="/vector1.svg"
        imageDimensions="/-background13.svg"
        imageDimensionsText="/brandlogocolored.svg"
        showSearchForm
      />
      <div className="absolute top-[226px] left-[99px] w-[380px] h-[380px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-md w-[380px] h-[380px]"
          alt=""
          src="/image-area.svg"
        />
        <img
          className="absolute top-[16px] left-[17px] w-[345px] h-[345px] object-cover"
          alt=""
          src="/image-341@2x.png"
        />
      </div>
      <div className="absolute top-[806px] left-[70px] box-border w-[880px] h-12 border-b-[1px] border-solid border-gray-300">
        <Navbasetabtextnorm
          text="Reviews"
          navbasetabtextnormWidth="11.7%"
          navbasetabtextnormHeight="100%"
          navbasetabtextnormPosition="absolute"
          navbasetabtextnormTop="0%"
          navbasetabtextnormRight="73.75%"
          navbasetabtextnormBottom="0%"
          navbasetabtextnormLeft="14.55%"
          textLeft="20px"
        />
        <Navbasetabtextnorm
          text="Shipping"
          navbasetabtextnormWidth="11.7%"
          navbasetabtextnormHeight="100%"
          navbasetabtextnormPosition="absolute"
          navbasetabtextnormTop="0%"
          navbasetabtextnormRight="62.05%"
          navbasetabtextnormBottom="0%"
          navbasetabtextnormLeft="26.25%"
          textLeft="18px"
        />
        <Navbasetabtextnorm
          text="About seller"
          navbasetabtextnormWidth="17.27%"
          navbasetabtextnormHeight="100%"
          navbasetabtextnormPosition="absolute"
          navbasetabtextnormTop="0%"
          navbasetabtextnormRight="44.77%"
          navbasetabtextnormBottom="0%"
          navbasetabtextnormLeft="37.95%"
          textLeft="30px"
        />
        <Navbasetabtextactive
          text="Description"
          navbasetabtextactiveWidth="13.64%"
          navbasetabtextactiveHeight="100%"
          navbasetabtextactivePosition="absolute"
          navbasetabtextactiveTop="0%"
          navbasetabtextactiveRight="85.45%"
          navbasetabtextactiveBottom="0%"
          navbasetabtextactiveLeft="0.91%"
          textLeft="16px"
        />
      </div>
      <LayoutfooterAlibaba
        imageDimensions="/brandlogocolored1.svg"
        imageDimensionsText="/iconcontrolexpand-less.svg"
        imageDimensionsText2="/subtract1.svg"
        imageDimensionsCode="/logo1.svg"
        colTop="2022px"
      />
      <ShopNowForm />
    </div>
  );
};

export default WebDetail;
