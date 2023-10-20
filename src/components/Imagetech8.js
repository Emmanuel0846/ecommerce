import { useMemo } from "react";

const Imagetech8 = ({
  image35,
  imagetech8Width,
  imagetech8Height,
  imagetech8Position,
  imagetech8Top,
  imagetech8Left,
  imagetech8Right,
  imagetech8Bottom,
  imagetech8MixBlendMode,
}) => {
  const imagetech8Style = useMemo(() => {
    return {
      width: imagetech8Width,
      height: imagetech8Height,
      position: imagetech8Position,
      top: imagetech8Top,
      left: imagetech8Left,
      right: imagetech8Right,
      bottom: imagetech8Bottom,
      mixBlendMode: imagetech8MixBlendMode,
    };
  }, [
    imagetech8Width,
    imagetech8Height,
    imagetech8Position,
    imagetech8Top,
    imagetech8Left,
    imagetech8Right,
    imagetech8Bottom,
    imagetech8MixBlendMode,
  ]);

  return (
    <div className="bg-white w-[225px] h-[225px]" style={imagetech8Style}>
      <img
        className="absolute h-[86.67%] w-[72.44%] top-[6.67%] right-[13.78%] bottom-[6.67%] left-[13.78%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image35}
      />
    </div>
  );
};

export default Imagetech8;
