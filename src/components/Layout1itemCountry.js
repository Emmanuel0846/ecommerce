import { useMemo } from "react";

const Layout1itemCountry = ({
  dimensionCode,
  locationName,
  shopNameUrl,
  propLeft,
  propTop,
}) => {
  const layout1itemCountryStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[221px] h-9 text-left text-base text-dark font-text-btn-btn-small"
      style={layout1itemCountryStyle}
    >
      <div className="absolute h-[55.56%] w-[12.67%] top-[22.22%] right-[87.33%] bottom-[22.22%] left-[0%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={dimensionCode}
        />
      </div>
      <div className="absolute top-[0%] left-[17.65%] tracking-[-0.2px] leading-[24px]">
        {locationName}
      </div>
      <div className="absolute top-[55.56%] left-[17.65%] text-smi text-gray-500">
        {shopNameUrl}
      </div>
    </div>
  );
};

export default Layout1itemCountry;
