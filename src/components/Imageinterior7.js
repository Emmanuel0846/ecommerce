import { useMemo } from "react";

const Imageinterior7 = ({
  rasm,
  imageinterior7Width,
  imageinterior7Height,
  imageinterior7Position,
  imageinterior7Top,
  imageinterior7Right,
  imageinterior7Bottom,
  imageinterior7Left,
  imageinterior7MixBlendMode,
}) => {
  const imageinterior7Style = useMemo(() => {
    return {
      width: imageinterior7Width,
      height: imageinterior7Height,
      position: imageinterior7Position,
      top: imageinterior7Top,
      right: imageinterior7Right,
      bottom: imageinterior7Bottom,
      left: imageinterior7Left,
      mixBlendMode: imageinterior7MixBlendMode,
    };
  }, [
    imageinterior7Width,
    imageinterior7Height,
    imageinterior7Position,
    imageinterior7Top,
    imageinterior7Right,
    imageinterior7Bottom,
    imageinterior7Left,
    imageinterior7MixBlendMode,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior7Style}
    >
      <img
        className="absolute h-[105.33%] w-full top-[0%] right-[0%] bottom-[-5.33%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
        alt=""
        src={rasm}
      />
    </div>
  );
};

export default Imageinterior7;
