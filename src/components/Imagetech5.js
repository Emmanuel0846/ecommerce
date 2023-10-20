import { useMemo } from "react";

const Imagetech5 = ({
  image29,
  imagetech5Width,
  imagetech5Height,
  imagetech5Position,
  imagetech5Top,
  imagetech5Right,
  imagetech5Bottom,
  imagetech5Left,
}) => {
  const imagetech5Style = useMemo(() => {
    return {
      width: imagetech5Width,
      height: imagetech5Height,
      position: imagetech5Position,
      top: imagetech5Top,
      right: imagetech5Right,
      bottom: imagetech5Bottom,
      left: imagetech5Left,
    };
  }, [
    imagetech5Width,
    imagetech5Height,
    imagetech5Position,
    imagetech5Top,
    imagetech5Right,
    imagetech5Bottom,
    imagetech5Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagetech5Style}
    >
      <img
        className="absolute h-[91.56%] w-[80.44%] top-[4.44%] right-[9.78%] bottom-[4%] left-[9.78%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image29}
      />
    </div>
  );
};

export default Imagetech5;
