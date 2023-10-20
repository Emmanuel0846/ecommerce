import { useMemo } from "react";

const Imageinterior1 = ({
  rasm,
  imageinterior1Width,
  imageinterior1Height,
  imageinterior1Position,
  imageinterior1Top,
  imageinterior1Right,
  imageinterior1Bottom,
  imageinterior1Left,
}) => {
  const imageinterior1Style = useMemo(() => {
    return {
      width: imageinterior1Width,
      height: imageinterior1Height,
      position: imageinterior1Position,
      top: imageinterior1Top,
      right: imageinterior1Right,
      bottom: imageinterior1Bottom,
      left: imageinterior1Left,
    };
  }, [
    imageinterior1Width,
    imageinterior1Height,
    imageinterior1Position,
    imageinterior1Top,
    imageinterior1Right,
    imageinterior1Bottom,
    imageinterior1Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior1Style}
    >
      <img
        className="absolute h-[84.44%] w-[81.33%] top-[8%] right-[9.33%] bottom-[7.56%] left-[9.33%] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
        alt=""
        src={rasm}
      />
    </div>
  );
};

export default Imageinterior1;
