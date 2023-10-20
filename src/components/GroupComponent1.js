import LayoutnavItem from "./LayoutnavItem";
import Formchecklabel1 from "./Formchecklabel1";
import Formchecklabel from "./Formchecklabel";

const GroupComponent1 = () => {
  return (
    <div className="absolute top-[48px] left-[1px] w-[229px] h-[216px]">
      <LayoutnavItem
        categoryName="See all "
        propTop="180px"
        propWidth="229px"
        propColor="#0d6efd"
      />
      <Formchecklabel1
        filterOptions="Samsung"
        propTop="0px"
        propLeft="0px"
        propWidth="114.5px"
      />
      <Formchecklabel
        hintText="Huawei"
        formchecklabelPosition="absolute"
        formchecklabelTop="72px"
        formchecklabelLeft="0px"
        formchecklabelWidth="101.14px"
      />
      <Formchecklabel1
        filterOptions="Apple"
        propTop="36px"
        propLeft="0px"
        propWidth="89.69px"
      />
      <Formchecklabel1
        filterOptions="Pocco"
        propTop="108px"
        propLeft="0px"
        propWidth="93.51px"
      />
      <Formchecklabel
        hintText="Lenovo"
        formchecklabelPosition="absolute"
        formchecklabelTop="144px"
        formchecklabelLeft="0px"
        formchecklabelWidth="101.14px"
      />
    </div>
  );
};

export default GroupComponent1;
