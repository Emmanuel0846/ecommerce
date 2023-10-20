import { useMemo } from "react";

const Imageinterior3 = ({
  image90,
  imageinterior3Width,
  imageinterior3Height,
  imageinterior3Position,
  imageinterior3Top,
  imageinterior3Right,
  imageinterior3Bottom,
  imageinterior3Left,
}) => {
  const imageinterior3Style = useMemo(() => {
    return {
      width: imageinterior3Width,
      height: imageinterior3Height,
      position: imageinterior3Position,
      top: imageinterior3Top,
      right: imageinterior3Right,
      bottom: imageinterior3Bottom,
      left: imageinterior3Left,
    };
  }, [
    imageinterior3Width,
    imageinterior3Height,
    imageinterior3Position,
    imageinterior3Top,
    imageinterior3Right,
    imageinterior3Bottom,
    imageinterior3Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imageinterior3Style}
    >
      <img
        className="absolute h-[95.56%] w-[95.56%] top-[2.22%] right-[0%] bottom-[2.22%] left-[4.44%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image90}
      />
    </div>
  );
};

export default Imageinterior3;
