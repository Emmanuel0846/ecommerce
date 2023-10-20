import { useMemo } from "react";

const Imageinterior5 = ({
  image93,
  imageinterior5Width,
  imageinterior5Height,
  imageinterior5Position,
  imageinterior5Top,
  imageinterior5Right,
  imageinterior5Bottom,
  imageinterior5Left,
}) => {
  const imageinterior5Style = useMemo(() => {
    return {
      width: imageinterior5Width,
      height: imageinterior5Height,
      position: imageinterior5Position,
      top: imageinterior5Top,
      right: imageinterior5Right,
      bottom: imageinterior5Bottom,
      left: imageinterior5Left,
    };
  }, [
    imageinterior5Width,
    imageinterior5Height,
    imageinterior5Position,
    imageinterior5Top,
    imageinterior5Right,
    imageinterior5Bottom,
    imageinterior5Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior5Style}
    >
      <img
        className="absolute h-[100.44%] w-[100.44%] top-[0%] right-[-0.44%] bottom-[-0.44%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image93}
      />
    </div>
  );
};

export default Imageinterior5;
