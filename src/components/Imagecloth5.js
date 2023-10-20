import { useMemo } from "react";

const Imagecloth5 = ({
  image26,
  imagecloth5Width,
  imagecloth5Height,
  imagecloth5Position,
  imagecloth5Top,
  imagecloth5Left,
  imagecloth5Right,
  imagecloth5Bottom,
  imagecloth5MixBlendMode,
}) => {
  const imagecloth5Style = useMemo(() => {
    return {
      width: imagecloth5Width,
      height: imagecloth5Height,
      position: imagecloth5Position,
      top: imagecloth5Top,
      left: imagecloth5Left,
      right: imagecloth5Right,
      bottom: imagecloth5Bottom,
      mixBlendMode: imagecloth5MixBlendMode,
    };
  }, [
    imagecloth5Width,
    imagecloth5Height,
    imagecloth5Position,
    imagecloth5Top,
    imagecloth5Left,
    imagecloth5Right,
    imagecloth5Bottom,
    imagecloth5MixBlendMode,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagecloth5Style}
    >
      <img
        className="absolute h-[86.22%] w-[86.22%] top-[7.11%] right-[6.67%] bottom-[6.67%] left-[7.11%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image26}
      />
    </div>
  );
};

export default Imagecloth5;
