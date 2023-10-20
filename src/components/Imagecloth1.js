import { useMemo } from "react";

const Imagecloth1 = ({
  bitmap,
  imagecloth1Width,
  imagecloth1Height,
  imagecloth1Position,
  imagecloth1Top,
  imagecloth1Right,
  imagecloth1Bottom,
  imagecloth1Left,
  imagecloth1MixBlendMode,
}) => {
  const imagecloth1Style = useMemo(() => {
    return {
      width: imagecloth1Width,
      height: imagecloth1Height,
      position: imagecloth1Position,
      top: imagecloth1Top,
      right: imagecloth1Right,
      bottom: imagecloth1Bottom,
      left: imagecloth1Left,
      mixBlendMode: imagecloth1MixBlendMode,
    };
  }, [
    imagecloth1Width,
    imagecloth1Height,
    imagecloth1Position,
    imagecloth1Top,
    imagecloth1Right,
    imagecloth1Bottom,
    imagecloth1Left,
    imagecloth1MixBlendMode,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagecloth1Style}
    >
      <img
        className="absolute h-[85.33%] w-[75.11%] top-[7.11%] right-[12.44%] bottom-[7.56%] left-[12.44%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={bitmap}
      />
    </div>
  );
};

export default Imagecloth1;
