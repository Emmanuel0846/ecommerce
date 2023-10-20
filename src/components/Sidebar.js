import LayoutcollablseHeading from "./LayoutcollablseHeading";
import Formchecklabel2 from "./Formchecklabel2";
import AssetsassetOnOffcheckbox1 from "./AssetsassetOnOffcheckbox1";
import RatingRatingStarsstars3 from "./RatingRatingStarsstars3";
import CardContainer from "./CardContainer";
import FormRangeIcon from "./FormRangeIcon";
import Formlabelinput from "./Formlabelinput";
import SizesmallContentbtnText from "./SizesmallContentbtnText";
import LayoutnavItem from "./LayoutnavItem";

const Sidebar = () => {
  return (
    <div className="absolute top-[208px] left-[70px] w-60 h-[1448px] text-left text-base text-dark font-text-btn-btn-small">
      <div className="absolute top-[1044px] left-[2px] w-[230px] h-48">
        <LayoutcollablseHeading
          categoryLabel="Condition"
          brandImageUrl="/iconcontrolexpand-less3.svg"
        />
        <div className="absolute top-[48px] left-[0px] w-[142px] h-36">
          <Formchecklabel2
            itemDimensions="/assetsasset-onoffradio-on.svg"
            itemDescription="Any"
            propTop="0px"
          />
          <Formchecklabel2
            itemDimensions="/form--selection--checkbox-off.svg"
            itemDescription="Brand new"
            propTop="72px"
          />
          <Formchecklabel2
            itemDimensions="/form--selection--checkbox-off.svg"
            itemDescription="Refurbished"
            propTop="36px"
          />
          <Formchecklabel2
            itemDimensions="/form--selection--checkbox-off.svg"
            itemDescription="Old items"
          />
        </div>
      </div>
      <div className="absolute top-[1256px] left-[2px] w-[230px] h-48">
        <LayoutcollablseHeading
          categoryLabel="Ratings"
          brandImageUrl="/iconcontrolexpand-less3.svg"
        />
        <div className="absolute top-[48px] left-[0px] w-[143px] h-36">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start py-1.5 pr-4 pl-0">
            <AssetsassetOnOffcheckbox1 assetsassetOnOffcheckboxPosition="relative" />
            <RatingRatingStarsstars3
              ratingRatingStarsstars3Ra="/miscrating.svg"
              ratingRatingStarsstars3IcWidth="93px"
              ratingRatingStarsstars3IcHeight="18px"
              ratingRatingStarsstars3IcPosition="relative"
              ratingRatingStarsstars3IcTop="unset"
              ratingRatingStarsstars3IcRight="unset"
              ratingRatingStarsstars3IcBottom="unset"
              ratingRatingStarsstars3IcLeft="unset"
              ratingRatingStarsstars3IcMaxWidth="unset"
              ratingRatingStarsstars3IcOverflow="unset"
              ratingRatingStarsstars3IcMaxHeight="unset"
            />
          </div>
          <div className="absolute top-[36px] left-[0px] flex flex-row items-center justify-start py-1.5 pr-4 pl-0">
            <AssetsassetOnOffcheckbox1 assetsassetOnOffcheckboxPosition="relative" />
            <RatingRatingStarsstars3
              ratingRatingStarsstars3Ra="/miscrating1.svg"
              ratingRatingStarsstars3IcWidth="93px"
              ratingRatingStarsstars3IcHeight="18px"
              ratingRatingStarsstars3IcPosition="relative"
              ratingRatingStarsstars3IcTop="unset"
              ratingRatingStarsstars3IcRight="unset"
              ratingRatingStarsstars3IcBottom="unset"
              ratingRatingStarsstars3IcLeft="unset"
              ratingRatingStarsstars3IcMaxWidth="unset"
              ratingRatingStarsstars3IcOverflow="unset"
              ratingRatingStarsstars3IcMaxHeight="unset"
            />
          </div>
          <div className="absolute top-[72px] left-[0px] flex flex-row items-center justify-start py-1.5 pr-4 pl-0">
            <AssetsassetOnOffcheckbox1 assetsassetOnOffcheckboxPosition="relative" />
            <RatingRatingStarsstars3
              ratingRatingStarsstars3Ra="/miscrating2.svg"
              ratingRatingStarsstars3IcWidth="93px"
              ratingRatingStarsstars3IcHeight="18px"
              ratingRatingStarsstars3IcPosition="relative"
              ratingRatingStarsstars3IcTop="unset"
              ratingRatingStarsstars3IcRight="unset"
              ratingRatingStarsstars3IcBottom="unset"
              ratingRatingStarsstars3IcLeft="unset"
              ratingRatingStarsstars3IcMaxWidth="unset"
              ratingRatingStarsstars3IcOverflow="unset"
              ratingRatingStarsstars3IcMaxHeight="unset"
            />
          </div>
          <div className="absolute top-[108px] left-[0px] flex flex-row items-center justify-start py-1.5 pr-4 pl-0">
            <AssetsassetOnOffcheckbox1 assetsassetOnOffcheckboxPosition="relative" />
            <RatingRatingStarsstars3
              ratingRatingStarsstars3Ra="/miscrating3.svg"
              ratingRatingStarsstars3IcWidth="93px"
              ratingRatingStarsstars3IcHeight="18px"
              ratingRatingStarsstars3IcPosition="relative"
              ratingRatingStarsstars3IcTop="unset"
              ratingRatingStarsstars3IcRight="unset"
              ratingRatingStarsstars3IcBottom="unset"
              ratingRatingStarsstars3IcLeft="unset"
              ratingRatingStarsstars3IcMaxWidth="unset"
              ratingRatingStarsstars3IcOverflow="unset"
              ratingRatingStarsstars3IcMaxHeight="unset"
            />
          </div>
        </div>
      </div>
      <CardContainer
        productDetails="Brands"
        seeAllText="See all "
        brandNameFeatureName="Samsung"
        deviceBrandDeviceSpecs="Huawei"
        productDescription="Apple"
        brandDescription="Pocco"
        deviceImageUrl="Lenovo"
      />
      <CardContainer
        productDetails="Features"
        seeAllText="See all"
        brandNameFeatureName="Metallic"
        deviceBrandDeviceSpecs="8GB Ram"
        productDescription="Plastic cover"
        brandDescription="Super power"
        deviceImageUrl="Large Memory"
        propTop="532px"
        propWidth="103.55px"
        propWidth1="114px"
        propWidth2="139.65px"
        propWidth3="138.7px"
        propWidth4="152px"
      />
      <div className="absolute top-[816px] left-[2px] w-[230px] h-52">
        <LayoutcollablseHeading
          categoryLabel="Price range"
          brandImageUrl="/iconcontrolexpand-less1.svg"
        />
        <div className="absolute top-[56px] left-[0px] w-[230px] h-[152px]">
          <FormRangeIcon />
          <Formlabelinput
            label="Min"
            background="/-background24.svg"
            text="0"
            formlabelinputWidth="111px"
            formlabelinputPosition="absolute"
            formlabelinputTop="40px"
            formlabelinputLeft="0px"
          />
          <Formlabelinput
            label="Max"
            background="/-background26.svg"
            text="999999"
            formlabelinputWidth="110px"
            formlabelinputPosition="absolute"
            formlabelinputTop="40px"
            formlabelinputLeft="120px"
          />
          <SizesmallContentbtnText
            text="Apply"
            sizesmallContentbtnTextPosition="absolute"
            sizesmallContentbtnTextTop="73.68%"
            sizesmallContentbtnTextLeft="0%"
            sizesmallContentbtnTextWidth="99.13%"
            sizesmallContentbtnTextBackground="unset"
            sizesmallContentbtnTextBackgroundColor="#fff"
            sizesmallContentbtnTextBorder="1px solid #dee2e7"
            sizesmallContentbtnTextHeight="26.32%"
            sizesmallContentbtnTextRight="0.87%"
            sizesmallContentbtnTextBottom="0%"
            sizesmallContentbtnTextBoxShadow="0px 1px 2px rgba(56, 56, 56, 0.08)"
            textColor="#0d6efd"
            textFontSize="16px"
          />
        </div>
      </div>
      <LayoutnavItem categoryName="Mobile accessory" />
      <LayoutnavItem
        categoryName="Smartphones "
        propTop="120px"
        propWidth="230px"
        propColor="#505050"
      />
      <LayoutnavItem
        categoryName="See all"
        propTop="192px"
        propWidth="230px"
        propColor="#0d6efd"
      />
      <LayoutnavItem
        categoryName="Electronics"
        propTop="84px"
        propWidth="230px"
        propColor="#505050"
      />
      <LayoutnavItem
        categoryName="Modern tech"
        propTop="156px"
        propWidth="230px"
        propColor="#505050"
      />
      <LayoutcollablseHeading
        categoryLabel="Category"
        brandImageUrl="/iconcontrolexpand-less1.svg"
      />
    </div>
  );
};

export default Sidebar;
