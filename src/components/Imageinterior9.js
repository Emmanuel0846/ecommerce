import { useMemo } from "react";

const Imageinterior9 = ({
  image88,
  imageinterior9Width,
  imageinterior9Height,
  imageinterior9Position,
  imageinterior9Top,
  imageinterior9Right,
  imageinterior9Bottom,
  imageinterior9Left,
}) => {
  const imageinterior9Style = useMemo(() => {
    return {
      width: imageinterior9Width,
      height: imageinterior9Height,
      position: imageinterior9Position,
      top: imageinterior9Top,
      right: imageinterior9Right,
      bottom: imageinterior9Bottom,
      left: imageinterior9Left,
    };
  }, [
    imageinterior9Width,
    imageinterior9Height,
    imageinterior9Position,
    imageinterior9Top,
    imageinterior9Right,
    imageinterior9Bottom,
    imageinterior9Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior9Style}
    >
      <img
        className="absolute h-[99.11%] w-[99.11%] top-[0%] right-[0.89%] bottom-[0.89%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image88}
      />
    </div>
  );
};

export default Imageinterior9;
