import { useMemo } from "react";

const Imagetech9 = ({
  image86,
  imagetech9Width,
  imagetech9Height,
  imagetech9Position,
  imagetech9Top,
  imagetech9Right,
  imagetech9Bottom,
  imagetech9Left,
  imagetech9MixBlendMode,
}) => {
  const imagetech9Style = useMemo(() => {
    return {
      width: imagetech9Width,
      height: imagetech9Height,
      position: imagetech9Position,
      top: imagetech9Top,
      right: imagetech9Right,
      bottom: imagetech9Bottom,
      left: imagetech9Left,
      mixBlendMode: imagetech9MixBlendMode,
    };
  }, [
    imagetech9Width,
    imagetech9Height,
    imagetech9Position,
    imagetech9Top,
    imagetech9Right,
    imagetech9Bottom,
    imagetech9Left,
    imagetech9MixBlendMode,
  ]);

  return (
    <div className="bg-white w-[225px] h-[225px]" style={imagetech9Style}>
      <img
        className="absolute h-[96.89%] w-[96.89%] top-[1.78%] right-[1.33%] bottom-[1.33%] left-[1.78%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image86}
      />
    </div>
  );
};

export default Imagetech9;
