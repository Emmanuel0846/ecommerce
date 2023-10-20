import { useMemo } from "react";

const Imageinterior8 = ({
  image87,
  imageinterior8Width,
  imageinterior8Height,
  imageinterior8Position,
  imageinterior8Top,
  imageinterior8Right,
  imageinterior8Bottom,
  imageinterior8Left,
}) => {
  const imageinterior8Style = useMemo(() => {
    return {
      width: imageinterior8Width,
      height: imageinterior8Height,
      position: imageinterior8Position,
      top: imageinterior8Top,
      right: imageinterior8Right,
      bottom: imageinterior8Bottom,
      left: imageinterior8Left,
    };
  }, [
    imageinterior8Width,
    imageinterior8Height,
    imageinterior8Position,
    imageinterior8Top,
    imageinterior8Right,
    imageinterior8Bottom,
    imageinterior8Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior8Style}
    >
      <img
        className="absolute h-[84.44%] w-[94.67%] top-[8%] right-[2.67%] bottom-[7.56%] left-[2.67%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image87}
      />
    </div>
  );
};

export default Imageinterior8;
