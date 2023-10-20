import { useMemo } from "react";

const Imagetech3 = ({
  image23,
  imagetech3Width,
  imagetech3Height,
  imagetech3Position,
  imagetech3Top,
  imagetech3Left,
  imagetech3Right,
  imagetech3Bottom,
}) => {
  const imagetech3Style = useMemo(() => {
    return {
      width: imagetech3Width,
      height: imagetech3Height,
      position: imagetech3Position,
      top: imagetech3Top,
      left: imagetech3Left,
      right: imagetech3Right,
      bottom: imagetech3Bottom,
    };
  }, [
    imagetech3Width,
    imagetech3Height,
    imagetech3Position,
    imagetech3Top,
    imagetech3Left,
    imagetech3Right,
    imagetech3Bottom,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagetech3Style}
    >
      <img
        className="absolute h-[89.33%] w-[89.33%] top-[5.33%] right-[5.33%] bottom-[5.33%] left-[5.33%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image23}
      />
    </div>
  );
};

export default Imagetech3;
