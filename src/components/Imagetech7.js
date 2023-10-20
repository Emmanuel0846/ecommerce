import { useMemo } from "react";

const Imagetech7 = ({
  image34,
  imagetech7Width,
  imagetech7Height,
  imagetech7Position,
  imagetech7Top,
  imagetech7Right,
  imagetech7Bottom,
  imagetech7Left,
  imagetech7MixBlendMode,
}) => {
  const imagetech7Style = useMemo(() => {
    return {
      width: imagetech7Width,
      height: imagetech7Height,
      position: imagetech7Position,
      top: imagetech7Top,
      right: imagetech7Right,
      bottom: imagetech7Bottom,
      left: imagetech7Left,
      mixBlendMode: imagetech7MixBlendMode,
    };
  }, [
    imagetech7Width,
    imagetech7Height,
    imagetech7Position,
    imagetech7Top,
    imagetech7Right,
    imagetech7Bottom,
    imagetech7Left,
    imagetech7MixBlendMode,
  ]);

  return (
    <div className="bg-white w-[225px] h-[225px]" style={imagetech7Style}>
      <img
        className="absolute h-[71.11%] w-[90.22%] top-[14.67%] right-[4.89%] bottom-[14.22%] left-[4.89%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image34}
      />
    </div>
  );
};

export default Imagetech7;
