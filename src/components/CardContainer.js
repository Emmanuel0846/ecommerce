import { useMemo } from "react";
import LayoutcollablseHeading from "./LayoutcollablseHeading";
import LayoutnavItem from "./LayoutnavItem";
import Formchecklabel from "./Formchecklabel";

const CardContainer = ({
  productDetails,
  seeAllText,
  brandNameFeatureName,
  deviceBrandDeviceSpecs,
  productDescription,
  brandDescription,
  deviceImageUrl,
  propTop,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const formchecklabelStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const formchecklabelStyle1 = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const formchecklabelStyle2 = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const formchecklabelStyle3 = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const formchecklabelStyle4 = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <div
      className="absolute top-[248px] left-[0px] w-[230px] h-[264px]"
      style={groupDiv2Style}
    >
      <LayoutcollablseHeading
        categoryLabel="Brands"
        brandImageUrl="/iconcontrolexpand-less1.svg"
      />
      <div className="absolute top-[48px] left-[1px] w-[229px] h-[216px]">
        <LayoutnavItem
          categoryName="See all "
          propTop="180px"
          propWidth="229px"
          propColor="#0d6efd"
        />
        <Formchecklabel
          hintText="Samsung"
          formchecklabelPosition="absolute"
          formchecklabelTop="0px"
          formchecklabelLeft="0px"
          formchecklabelWidth="114.5px"
        />
        <Formchecklabel
          hintText="Huawei"
          formchecklabelPosition="absolute"
          formchecklabelTop="72px"
          formchecklabelLeft="0px"
          formchecklabelWidth="101.14px"
        />
        <Formchecklabel
          hintText="Apple"
          formchecklabelPosition="absolute"
          formchecklabelTop="36px"
          formchecklabelLeft="0px"
          formchecklabelWidth="89.69px"
        />
        <Formchecklabel
          hintText="Pocco"
          formchecklabelPosition="absolute"
          formchecklabelTop="108px"
          formchecklabelLeft="0px"
          formchecklabelWidth="93.51px"
        />
        <Formchecklabel
          hintText="Lenovo"
          formchecklabelPosition="absolute"
          formchecklabelTop="144px"
          formchecklabelLeft="0px"
          formchecklabelWidth="101.14px"
        />
      </div>
    </div>
  );
};

export default CardContainer;
