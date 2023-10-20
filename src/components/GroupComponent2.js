import LayoutnavItem from "./LayoutnavItem";
import Formchecklabel1 from "./Formchecklabel1";
import Formchecklabel from "./Formchecklabel";

const GroupComponent2 = () => {
  return (
    <div className="absolute top-[48px] left-[0px] w-[228px] h-[216px] text-left text-base text-dark font-text-btn-btn-small">
      <LayoutnavItem
        categoryName="See all"
        propTop="180px"
        propWidth="228px"
        propColor="#0d6efd"
      />
      <Formchecklabel1 filterOptions="Metallic" />
      <Formchecklabel
        hintText="8GB Ram"
        formchecklabelPosition="absolute"
        formchecklabelTop="72px"
        formchecklabelLeft="0px"
        formchecklabelWidth="114px"
      />
      <Formchecklabel
        hintText="Plastic cover"
        formchecklabelPosition="absolute"
        formchecklabelTop="36px"
        formchecklabelLeft="0px"
        formchecklabelWidth="139.65px"
      />
      <Formchecklabel
        hintText="Super power"
        formchecklabelPosition="absolute"
        formchecklabelTop="108px"
        formchecklabelLeft="0px"
        formchecklabelWidth="138.7px"
      />
      <Formchecklabel
        hintText="Large Memory"
        formchecklabelPosition="absolute"
        formchecklabelTop="144px"
        formchecklabelLeft="0px"
        formchecklabelWidth="152px"
      />
    </div>
  );
};

export default GroupComponent2;
