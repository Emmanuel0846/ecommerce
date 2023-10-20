import { useMemo } from "react";

const Imagetech2 = ({
  image32,
  imagetech2Position,
  imagetech2Top,
  imagetech2Left,
  imagetech2MixBlendMode,
  imagetech2Width,
  imagetech2Height,
  imagetech2Right,
  imagetech2Bottom,
}) => {
  const imagetech2Style = useMemo(() => {
    return {
      position: imagetech2Position,
      top: imagetech2Top,
      left: imagetech2Left,
      mixBlendMode: imagetech2MixBlendMode,
      width: imagetech2Width,
      height: imagetech2Height,
      right: imagetech2Right,
      bottom: imagetech2Bottom,
    };
  }, [
    imagetech2Position,
    imagetech2Top,
    imagetech2Left,
    imagetech2MixBlendMode,
    imagetech2Width,
    imagetech2Height,
    imagetech2Right,
    imagetech2Bottom,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagetech2Style}
    >
      <img
        className="absolute h-[86.22%] w-[86.22%] top-[6.67%] right-[7.11%] bottom-[7.11%] left-[6.67%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image32}
      />
    </div>
  );
};

export default Imagetech2;
