import { useMemo } from "react";

const Imagetech10 = ({
  image85,
  imagetech10Width,
  imagetech10Height,
  imagetech10Position,
  imagetech10Top,
  imagetech10Right,
  imagetech10Bottom,
  imagetech10Left,
  imagetech10MixBlendMode,
}) => {
  const imagetech10Style = useMemo(() => {
    return {
      width: imagetech10Width,
      height: imagetech10Height,
      position: imagetech10Position,
      top: imagetech10Top,
      right: imagetech10Right,
      bottom: imagetech10Bottom,
      left: imagetech10Left,
      mixBlendMode: imagetech10MixBlendMode,
    };
  }, [
    imagetech10Width,
    imagetech10Height,
    imagetech10Position,
    imagetech10Top,
    imagetech10Right,
    imagetech10Bottom,
    imagetech10Left,
    imagetech10MixBlendMode,
  ]);

  return (
    <div className="w-[225px] h-[225px]" style={imagetech10Style}>
      <img
        className="absolute h-[92.89%] w-[92.89%] top-[4%] right-[3.56%] bottom-[3.11%] left-[3.56%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image85}
      />
    </div>
  );
};

export default Imagetech10;
