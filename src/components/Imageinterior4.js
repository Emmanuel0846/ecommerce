import { useMemo } from "react";

const Imageinterior4 = ({
  image89,
  imageinterior4Width,
  imageinterior4Height,
  imageinterior4Position,
  imageinterior4Top,
  imageinterior4Right,
  imageinterior4Bottom,
  imageinterior4Left,
}) => {
  const imageinterior4Style = useMemo(() => {
    return {
      width: imageinterior4Width,
      height: imageinterior4Height,
      position: imageinterior4Position,
      top: imageinterior4Top,
      right: imageinterior4Right,
      bottom: imageinterior4Bottom,
      left: imageinterior4Left,
    };
  }, [
    imageinterior4Width,
    imageinterior4Height,
    imageinterior4Position,
    imageinterior4Top,
    imageinterior4Right,
    imageinterior4Bottom,
    imageinterior4Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior4Style}
    >
      <img
        className="absolute h-[91.56%] w-[91.56%] top-[3.11%] right-[5.33%] bottom-[5.33%] left-[3.11%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image89}
      />
    </div>
  );
};

export default Imageinterior4;
