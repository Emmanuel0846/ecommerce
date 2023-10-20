import { useMemo } from "react";

const Imagetech1 = ({
  image33,
  imagetech1Width,
  imagetech1Height,
  imagetech1Position,
  imagetech1Top,
  imagetech1Right,
  imagetech1Bottom,
  imagetech1Left,
}) => {
  const imagetech1Style = useMemo(() => {
    return {
      width: imagetech1Width,
      height: imagetech1Height,
      position: imagetech1Position,
      top: imagetech1Top,
      right: imagetech1Right,
      bottom: imagetech1Bottom,
      left: imagetech1Left,
    };
  }, [
    imagetech1Width,
    imagetech1Height,
    imagetech1Position,
    imagetech1Top,
    imagetech1Right,
    imagetech1Bottom,
    imagetech1Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagetech1Style}
    >
      <img
        className="absolute h-[88%] w-[88%] top-[5.78%] right-[5.78%] bottom-[6.22%] left-[6.22%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image33}
      />
    </div>
  );
};

export default Imagetech1;
