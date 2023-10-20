import ProductMonitoringContainer from "./ProductMonitoringContainer";
import ShippingContainer from "./ShippingContainer";

const SectionService = () => {
  return (
    <div className="absolute h-[7.17%] w-[81.94%] top-[72.3%] right-[9.03%] bottom-[20.53%] left-[6.03%] text-left text-base text-dark font-text-btn-btn-small">
      <ProductMonitoringContainer
        monitoringText="Product monitoring "
        inspectionText="and inspection"
        productImageUrl="/mask-group@2x.png"
        productIconText="/iconsecurity.svg"
      />
      <ShippingContainer
        featureDescription="Fast, reliable shipping by ocean or air"
        productImageDimensions="/mask-group1@2x.png"
        shippingDescription="/iconcontrolsend.svg"
      />
      <ShippingContainer
        featureDescription="Customize Your Products"
        productImageDimensions="/mask-group2@2x.png"
        shippingDescription="/iconinventory-2.svg"
        propRight="50.85%"
        propLeft="25.42%"
      />
      <ProductMonitoringContainer
        monitoringText="Source from "
        inspectionText="Industry Hubs"
        productImageUrl="/mask-group3@2x.png"
        productIconText="/iconcontrolsearch.svg"
        propRight="76.27%"
        propLeft="0%"
        propWidth="76.79%"
      />
      <div className="absolute top-[0px] left-[0px] w-[210px] h-8 text-5xl">
        <div className="absolute top-[0px] left-[0px] tracking-[-0.2px] leading-[32px] font-semibold">
          Our extra services
        </div>
      </div>
    </div>
  );
};

export default SectionService;
