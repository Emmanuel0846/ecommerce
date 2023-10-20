import { useMemo } from "react";

const TypeGooglePlay = ({
  logo,
  typeGooglePlayWidth,
  typeGooglePlayHeight,
  typeGooglePlayPosition,
  typeGooglePlayTop,
  typeGooglePlayRight,
  typeGooglePlayBottom,
  typeGooglePlayLeft,
  logoIconHeight,
  logoIconWidth,
  logoIconRight,
  logoIconBottom,
}) => {
  const typeGooglePlayStyle = useMemo(() => {
    return {
      width: typeGooglePlayWidth,
      height: typeGooglePlayHeight,
      position: typeGooglePlayPosition,
      top: typeGooglePlayTop,
      right: typeGooglePlayRight,
      bottom: typeGooglePlayBottom,
      left: typeGooglePlayLeft,
    };
  }, [
    typeGooglePlayWidth,
    typeGooglePlayHeight,
    typeGooglePlayPosition,
    typeGooglePlayTop,
    typeGooglePlayRight,
    typeGooglePlayBottom,
    typeGooglePlayLeft,
  ]);

  const logoIconStyle = useMemo(() => {
    return {
      height: logoIconHeight,
      width: logoIconWidth,
      right: logoIconRight,
      bottom: logoIconBottom,
    };
  }, [logoIconHeight, logoIconWidth, logoIconRight, logoIconBottom]);

  return (
    <div className="w-[170px] h-[58px]" style={typeGooglePlayStyle}>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-dark" />
        <img
          className="absolute h-[58.62%] w-[82.77%] top-[20.69%] right-[8.41%] bottom-[20.69%] left-[8.82%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={logo}
          style={logoIconStyle}
        />
      </div>
    </div>
  );
};

export default TypeGooglePlay;
