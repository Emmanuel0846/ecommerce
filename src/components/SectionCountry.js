import Layout1itemCountry from "./Layout1itemCountry";

const SectionCountry = () => {
  return (
    <div className="absolute top-[2868px] left-[80px] w-[1177px] h-[138px] text-left text-base text-dark font-text-btn-btn-small">
      <div className="absolute top-[56px] left-[0px] w-[1177px] h-[82px]">
        <Layout1itemCountry
          dimensionCode="/ae2x@2x.png"
          locationName="Arabic Emirates"
          shopNameUrl="shopname.ae"
        />
        <Layout1itemCountry
          dimensionCode="/dk2x@2x.png"
          locationName="Denmark"
          shopNameUrl="denmark.com.dk"
          propLeft="0px"
          propTop="46px"
        />
        <Layout1itemCountry
          dimensionCode="/us2x1@2x.png"
          locationName="United States"
          shopNameUrl="shopname.ae"
          propLeft="478px"
          propTop="0px"
        />
        <Layout1itemCountry
          dimensionCode="/ae2x@2x.png"
          locationName="Arabic Emirates"
          shopNameUrl="shopname.ae"
          propLeft="478px"
          propTop="46px"
        />
        <Layout1itemCountry
          dimensionCode="/au2x@2x.png"
          locationName="Australia"
          shopNameUrl="shopname.ae"
          propLeft="239px"
          propTop="0px"
        />
        <Layout1itemCountry
          dimensionCode="/fr2x@2x.png"
          locationName="France"
          shopNameUrl="shopname.com.fr"
          propLeft="239px"
          propTop="46px"
        />
        <Layout1itemCountry
          dimensionCode="/ru2x@2x.png"
          locationName="Russia"
          shopNameUrl="shopname.ru"
          propLeft="717px"
          propTop="0px"
        />
        <Layout1itemCountry
          dimensionCode="/cn2x@2x.png"
          locationName="China"
          shopNameUrl="shopname.ae"
          propLeft="717px"
          propTop="46px"
        />
        <Layout1itemCountry
          dimensionCode="/it2x@2x.png"
          locationName="Italy"
          shopNameUrl="shopname.it"
          propLeft="956px"
          propTop="0px"
        />
        <Layout1itemCountry
          dimensionCode="/gb2x@2x.png"
          locationName="Great Britain"
          shopNameUrl="shopname.co.uk"
          propLeft="956px"
          propTop="46px"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] text-5xl tracking-[-0.2px] leading-[32px] font-semibold">
        Suppliers by region
      </div>
    </div>
  );
};

export default SectionCountry;
