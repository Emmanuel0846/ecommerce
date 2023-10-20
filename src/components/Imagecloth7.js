import { useMemo } from "react";

const Imagecloth7 = ({
  image30,
  imagecloth7Width,
  imagecloth7Height,
  imagecloth7Position,
  imagecloth7Top,
  imagecloth7Left,
  imagecloth7Right,
  imagecloth7Bottom,
}) => {
  const imagecloth7Style = useMemo(() => {
    return {
      width: imagecloth7Width,
      height: imagecloth7Height,
      position: imagecloth7Position,
      top: imagecloth7Top,
      left: imagecloth7Left,
      right: imagecloth7Right,
      bottom: imagecloth7Bottom,
    };
  }, [
    imagecloth7Width,
    imagecloth7Height,
    imagecloth7Position,
    imagecloth7Top,
    imagecloth7Left,
    imagecloth7Right,
    imagecloth7Bottom,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagecloth7Style}
    >
      <img
        className="absolute h-[84.89%] w-[78.22%] top-[7.56%] right-[12.44%] bottom-[7.56%] left-[9.33%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image30}
      />
    </div>
  );
};

export default Imagecloth7;
