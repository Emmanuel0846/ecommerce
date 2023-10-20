import { useMemo } from "react";

const Imagetech6 = ({
  image28,
  imagetech6Width,
  imagetech6Height,
  imagetech6Position,
  imagetech6Top,
  imagetech6Right,
  imagetech6Bottom,
  imagetech6Left,
}) => {
  const imagetech6Style = useMemo(() => {
    return {
      width: imagetech6Width,
      height: imagetech6Height,
      position: imagetech6Position,
      top: imagetech6Top,
      right: imagetech6Right,
      bottom: imagetech6Bottom,
      left: imagetech6Left,
    };
  }, [
    imagetech6Width,
    imagetech6Height,
    imagetech6Position,
    imagetech6Top,
    imagetech6Right,
    imagetech6Bottom,
    imagetech6Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagetech6Style}
    >
      <img
        className="absolute h-[65.33%] w-[92.44%] top-[17.33%] right-[3.56%] bottom-[17.33%] left-[4%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image28}
      />
    </div>
  );
};

export default Imagetech6;
