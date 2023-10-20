import { useMemo } from "react";

const Imageinterior6 = ({
  image94,
  imageinterior6Width,
  imageinterior6Height,
  imageinterior6Position,
  imageinterior6Top,
  imageinterior6Right,
  imageinterior6Bottom,
  imageinterior6Left,
  imageinterior6MixBlendMode,
}) => {
  const imageinterior6Style = useMemo(() => {
    return {
      width: imageinterior6Width,
      height: imageinterior6Height,
      position: imageinterior6Position,
      top: imageinterior6Top,
      right: imageinterior6Right,
      bottom: imageinterior6Bottom,
      left: imageinterior6Left,
      mixBlendMode: imageinterior6MixBlendMode,
    };
  }, [
    imageinterior6Width,
    imageinterior6Height,
    imageinterior6Position,
    imageinterior6Top,
    imageinterior6Right,
    imageinterior6Bottom,
    imageinterior6Left,
    imageinterior6MixBlendMode,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior6Style}
    >
      <img
        className="absolute h-[91.11%] w-[91.11%] top-[4.44%] right-[4.44%] bottom-[4.44%] left-[4.44%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image94}
      />
    </div>
  );
};

export default Imageinterior6;
