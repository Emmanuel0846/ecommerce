import { useMemo } from "react";

const Imagetech4 = ({
  image22,
  imagetech4Width,
  imagetech4Height,
  imagetech4Position,
  imagetech4Top,
  imagetech4Right,
  imagetech4Bottom,
  imagetech4Left,
  imagetech4MixBlendMode,
}) => {
  const imagetech4Style = useMemo(() => {
    return {
      width: imagetech4Width,
      height: imagetech4Height,
      position: imagetech4Position,
      top: imagetech4Top,
      right: imagetech4Right,
      bottom: imagetech4Bottom,
      left: imagetech4Left,
      mixBlendMode: imagetech4MixBlendMode,
    };
  }, [
    imagetech4Width,
    imagetech4Height,
    imagetech4Position,
    imagetech4Top,
    imagetech4Right,
    imagetech4Bottom,
    imagetech4Left,
    imagetech4MixBlendMode,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagetech4Style}
    >
      <img
        className="absolute h-[88%] w-[92.89%] top-[7.11%] right-[3.56%] bottom-[4.89%] left-[3.56%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image22}
      />
    </div>
  );
};

export default Imagetech4;
